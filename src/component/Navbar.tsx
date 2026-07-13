"use client";

import Link from "next/link";
import { FaHome, FaBoxOpen, FaLayerGroup, FaChevronDown } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX, HiUsers } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ThemeSwitch } from "./Theming";
import { Button } from "@heroui/react";

export default function Navbar() {
    const router = useRouter();
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
        router.push("/");
    };

    // Scroll Effect: Hide on Scroll Down, Show on Scroll Up
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== "undefined") {
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

    const isAdmin = (session?.user as { role?: string })?.role === "admin";

    const sections = [
        { name: "Mission", href: "#mission" },
        { name: "FAQ", href: "#faq" },
        { name: "Core Programs", href: "#programs" },
        { name: "Story", href: "#story" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <nav
            className={`sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
                {/* Logo with Image and Text */}
                <div className="flex gap-2 items-center">
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="https://dohps.org/dohps_logo_big.png"
                            alt="Logo"
                            width={150}
                            height={150}
                            className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                            DOHPS
                        </span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden items-center gap-8 lg:flex text-slate-600 dark:text-slate-300">
                    <li>
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-medium transition hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <FaHome className="text-lg text-slate-400 dark:text-slate-500" />
                            Home
                        </Link>
                    </li>

                    {isAdmin && (
                        <>
                            <li>
                                <Link
                                    href="/addSuccessStory"
                                    className="flex items-center gap-2 font-medium transition hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    <FaBoxOpen className="text-lg text-slate-400 dark:text-slate-500" />
                                    Add Story
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/manageStory"
                                    className="flex items-center gap-2 font-medium transition hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    <FaBoxOpen className="text-lg text-slate-400 dark:text-slate-500" />
                                    Manage Story
                                </Link>
                            </li>
                        </>
                    )}
                    <li>
                        <Link
                            href="/success"
                            className="flex items-center gap-2 font-medium transition hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <HiUsers className="text-lg text-slate-400 dark:text-slate-500" />
                            All Stories
                        </Link>
                    </li>
                    {/* Desktop Sections Dropdown */}
                    <li className="relative" ref={desktopDropdownRef}>
                        <button
                            onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                            className="flex items-center gap-2 font-medium transition hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                        >
                            <FaLayerGroup className="text-base text-slate-400 dark:text-slate-500" />
                            Explore
                            <FaChevronDown
                                className={`text-xs transition-transform duration-200 ${desktopDropdownOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {desktopDropdownOpen && (
                            <div className="absolute left-0 top-8 z-50 w-48 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 py-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                                {sections.map((section) => (
                                    <Link
                                        key={section.name}
                                        href={section.href}
                                        onClick={() => setDesktopDropdownOpen(false)}
                                        className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 transition hover:bg-slate-55 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        {section.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                </ul>

                {/* Right Side Actions Container */}
                <div className="flex items-center gap-4">
                    {/* Login/Logout CTA Buttons (Desktop) */}
                    <div className="hidden lg:block">
                        {session ? (
                            <Button
                                variant="danger-soft"
                                onClick={logOutHandle}
                                className="w-full"
                            >
                                LogOut
                            </Button>
                        ) : (
                            <Link
                                href="/login"
                                className="rounded-xl bg-blue-600 px-5 py-2 text-white font-semibold transition-all duration-200 hover:bg-blue-700 hover:shadow-md dark:hover:shadow-none active:scale-95"
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
                        className="text-2xl lg:hidden text-slate-700 dark:text-slate-300 focus:outline-none"
                    >
                        {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                    </button>

                    {/* Theme Switcher */}
                    <ThemeSwitch />
                </div>

                {/* Mobile Dropdown Panel */}
                {open && (
                    <div className="absolute right-5 top-16 z-50 w-64 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xl lg:hidden transition-all">
                        <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                            <li>
                                <Link
                                    href="/"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 font-medium hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    <FaHome className="text-lg text-slate-400 dark:text-slate-500" />
                                    Home
                                </Link>
                            </li>

                            {/* Mobile Accordion */}
                            <li>
                                <button
                                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                    className="flex w-full items-center justify-between font-medium hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                                >
                                    <span className="flex items-center gap-2">
                                        <FaLayerGroup className="text-base text-slate-400 dark:text-slate-500" />
                                        Explore
                                    </span>
                                    <FaChevronDown
                                        className={`text-xs transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {mobileDropdownOpen && (
                                    <ul className="mt-2 space-y-2 pl-6 border-l-2 border-slate-100 dark:border-slate-800">
                                        {sections.map((section) => (
                                            <li key={section.name}>
                                                <Link
                                                    href={section.href}
                                                    onClick={() => setOpen(false)}
                                                    className="block text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-1"
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
                                    className="flex items-center gap-2 font-medium transition hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    <HiUsers className="text-lg text-slate-400 dark:text-slate-500" />
                                    All Stories
                                </Link>
                            </li>

                            {isAdmin && (
                                <>
                                    <li>
                                        <Link
                                            href="/addSuccessStory"
                                            onClick={() => setOpen(false)}
                                            className="flex items-center gap-2 font-medium hover:text-blue-600 dark:hover:text-blue-400"
                                        >
                                            <FaBoxOpen className="text-lg text-slate-400 dark:text-slate-500" />
                                            Add Story
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/manageStory"
                                            onClick={() => setOpen(false)}
                                            className="flex items-center gap-2 font-medium hover:text-blue-600 dark:hover:text-blue-400"
                                        >
                                            <FaBoxOpen className="text-lg text-slate-400 dark:text-slate-500" />
                                            Manage Story
                                        </Link>
                                    </li>
                                </>
                            )}

                            <hr className="border-slate-100 dark:border-slate-800" />

                            <li className="pt-1">
                                {session ? (
                                    <Button
                                        variant="danger-soft"
                                        onClick={logOutHandle}
                                        className="w-full"
                                    >
                                        LogOut
                                    </Button>
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