"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FaHome, FaBoxOpen, FaBuilding } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <FaBuilding className="text-3xl text-primary" />
                    <h1 className="text-2xl font-bold">Example</h1>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden items-center gap-8 md:flex">
                    <li>
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-medium transition hover:text-primary"
                        >
                            <FaHome />
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/addSuccessStory"
                            className="flex items-center gap-2 font-medium transition hover:text-primary"
                        >
                            <FaBoxOpen />
                            Success Story
                        </Link>
                    </li>
                </ul>

                {/* Login Button */}
                <div className="hidden md:block">
                    <Link
                        href={'/login'}
                    >
                        Login
                    </Link>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="text-3xl md:hidden"
                >
                    {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="border-t bg-white md:hidden">
                    <ul className="space-y-4 p-5">
                        <li>
                            <Link
                                href="/"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2"
                            >
                                <FaHome />
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/addSuccessStory"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2"
                            >
                                Success Story
                            </Link>
                        </li>

                        <Button
                            className="w-full"
                            onPress={() => setOpen(false)}
                        >
                            Login
                        </Button>
                    </ul>
                </div>
            )}
        </nav>
    );
}