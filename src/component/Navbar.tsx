"use client";

import Link from "next/link";
import { FaHome, FaBoxOpen, FaLayerGroup, FaChevronDown } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    // Scroll management states
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const desktopDropdownRef = useRef<HTMLLIElement | null>(null);
    const { data: session } = authClient.useSession();

    const logOutHandle = async () => {
        await authClient.signOut();
        setOpen(false);
    };

    // Scroll Effect: Hide on Scroll Down, Show on Scroll Up
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== "undefined") {
                // If scrolling down, hide navbar. If scrolling up, show it.
                if (window.scrollY > lastScrollY && window.scrollY > 80) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [lastScrollY]);

    // Close the desktop dropdown if clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target as Node)) {
                setDesktopDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // const isAdmin = session?.user?.role === 'admin';
    const isAdmin = (session?.user as { role?: string })?.role === "admin";
    const sections = [
        { name: "Mission", href: "#mission" },
        { name: "FAQ", href: "#faq" },
        { name: "Core Programs", href: "#programs" },
        { name: "Story", href: "#story" },
        { name: "Contuct", href: "#contruct" }
    ];

    return (
        <nav
            className={`sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md shadow-sm transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
                {/* Logo with Image and Text */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="https://dohps.org/dohps_logo_big.png"
                        alt="Logo"
                        width={150}
                        height={150}
                        className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"

                    />
                    <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        DOHPS
                    </span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden items-center gap-8 md:flex text-slate-600">
                    <li>
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-medium transition hover:text-blue-600"
                        >
                            <FaHome className="text-lg" />
                            Home
                        </Link>
                    </li>

                    {isAdmin && (
                        <>
                            <li>
                                <Link
                                    href="/addSuccessStory"
                                    className="flex items-center gap-2 font-medium transition hover:text-blue-600"
                                >
                                    <FaBoxOpen className="text-lg" />
                                    Add Story
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/manageStory"
                                    className="flex items-center gap-2 font-medium transition hover:text-blue-600"
                                >
                                    <FaBoxOpen className="text-lg" />
                                    Manage Story
                                </Link>
                            </li>
                        </>
                    )}
                    <li>
                        <Link
                            href="/success"
                            className="flex items-center gap-2 font-medium transition hover:text-blue-600"
                        >
                            All Stories
                        </Link>
                    </li>
                    {/* Desktop Sections Dropdown */}
                    <li className="relative"
                        ref={desktopDropdownRef}>
                        <button
                            onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                            className="flex items-center gap-2 font-medium transition hover:text-blue-600 focus:outline-none"
                        >
                            <FaLayerGroup className="text-base" />
                            Explore
                            <FaChevronDown className={`text-xs transition-transform duration-200 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {desktopDropdownOpen && (
                            <div className="absolute left-0 top-8 z-50 w-48 rounded-xl border border-slate-100 bg-white py-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                                {sections.map((section) => (
                                    <Link
                                        key={section.name}
                                        href={section.href}
                                        onClick={() => setDesktopDropdownOpen(false)}
                                        className="block px-4 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                                    >
                                        {section.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                </ul>

                {/* Login/Logout CTA Buttons */}
                <div className="hidden md:block">
                    {session ? (
                        <button
                            onClick={logOutHandle}
                            className="rounded-xl bg-rose-500 px-5 py-2 text-white font-semibold transition-all duration-200 hover:bg-rose-600 hover:shadow-md hover:shadow-rose-100 active:scale-95"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            href="/login"
                            className="rounded-xl bg-blue-600 px-5 py-2 text-white font-semibold transition-all duration-200 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-100 active:scale-95"
                        >
                            Login
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Toggle Icon */}
                <button
                    onClick={() => {
                        setOpen(!open);
                        setMobileDropdownOpen(false);
                    }}
                    className="text-2xl md:hidden text-slate-700 focus:outline-none"
                >
                    {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                </button>

                {/* Mobile Dropdown Panel */}
                {open && (
                    <div className="absolute right-5 top-16 z-50 w-64 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl md:hidden transition-all">
                        <ul className="space-y-4 text-slate-700">
                            <li>
                                <Link
                                    href="/"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 font-medium hover:text-blue-600"
                                >
                                    <FaHome className="text-lg text-slate-400" />
                                    Home
                                </Link>
                            </li>

                            {/* Mobile Accordion */}
                            <li>
                                <button
                                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                    className="flex w-full items-center justify-between font-medium hover:text-blue-600 focus:outline-none"
                                >
                                    <span className="flex items-center gap-2">
                                        <FaLayerGroup className="text-base text-slate-400" />
                                        Explore
                                    </span>
                                    <FaChevronDown className={`text-xs transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {mobileDropdownOpen && (
                                    <ul className="mt-2 space-y-2 pl-6 border-l-2 border-slate-100">
                                        {sections.map((section) => (
                                            <li key={section.name}>
                                                <Link
                                                    href={section.href}
                                                    onClick={() => setOpen(false)}
                                                    className="block text-sm text-slate-600 hover:text-blue-600 py-1"
                                                >
                                                    {section.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>

                            <li>
                                <Link
                                    href="/success"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 font-medium hover:text-blue-600"
                                >
                                    All Stories
                                </Link>
                            </li>

                            {isAdmin && (
                                <>
                                    <li>
                                        <Link
                                            href="/addSuccessStory"
                                            onClick={() => setOpen(false)}
                                            className="flex items-center gap-2 font-medium hover:text-blue-600"
                                        >
                                            <FaBoxOpen className="text-lg text-slate-400" />
                                            Add Story
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/manageStory"
                                            onClick={() => setOpen(false)}
                                            className="flex items-center gap-2 font-medium hover:text-blue-600"
                                        >
                                            <FaBoxOpen className="text-lg text-slate-400" />
                                            Manage Story
                                        </Link>
                                    </li>
                                </>
                            )}

                            <hr className="border-slate-100" />

                            <li className="pt-1">
                                {session ? (
                                    <button
                                        onClick={logOutHandle}
                                        className="w-full rounded-xl bg-rose-500 py-2.5 text-center text-white font-semibold transition-all hover:bg-rose-600 active:scale-95"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <Link
                                        href="/login"
                                        onClick={() => setOpen(false)}
                                        className="block w-full rounded-xl bg-blue-600 py-2.5 text-center text-white font-semibold transition-all hover:bg-blue-700 active:scale-95"
                                    >
                                        Login
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}