"use client";

import React from "react";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";

export default function Donate() {
    return (
        <>
            {/* Injecting the custom running shadow animation keyframes with dark mode optimization */}
            <style jsx global>{`
                @keyframes running-shadow {
                    0% {
                        box-shadow: 0 0 15px #2563eb, 0 0 25px rgba(37, 99, 235, 0.35);
                    }
                    33% {
                        box-shadow: 0 0 15px #4f46e5, 0 0 25px rgba(79, 70, 229, 0.35);
                    }
                    66% {
                        box-shadow: 0 0 15px #e11d48, 0 0 25px rgba(225, 29, 72, 0.35);
                    }
                    100% {
                        box-shadow: 0 0 15px #2563eb, 0 0 25px rgba(37, 99, 235, 0.35);
                    }
                }
                .animate-running-shadow {
                    animation: running-shadow 5s linear infinite;
                }
            `}</style>

            {/* Floating Container: Fixed to the middle-left of the viewport */}
            <div className="fixed left-0 top-1/2 z-50 -translate-y-1/2 pointer-events-none">
                <Link
                    href="/donate"
                    className="pointer-events-auto flex flex-col items-center gap-3 bg-slate-900 dark:bg-slate-950 text-white font-bold text-sm tracking-wider uppercase
                               py-4 px-4 rounded-r-2xl border-y border-r border-slate-800/80 dark:border-slate-800
                               transition-all duration-300 origin-left select-none
                               hover:bg-blue-600 dark:hover:bg-blue-600 hover:pl-6 active:scale-95
                               animate-running-shadow group"
                >
                    {/* Beating Heart Icon */}
                    <BiHeart className="text-xl text-rose-500 transition-transform duration-300 group-hover:scale-125 group-hover:animate-pulse" />

                    {/* Sideways rotated text for a sleek vertical tab design */}
                    <span className="[writing-mode:vertical-lr] rotate-180 font-extrabold tracking-widest mt-1">
                        Donate
                    </span>
                </Link>
            </div>
        </>
    );
}