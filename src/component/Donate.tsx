"use client";

import { BiHeart } from "react-icons/bi";
import { DonateModal } from "./DonateModal";

export default function Donate() {
    return (
        <div className="fixed left-0 top-1/2 z-50 -translate-y-1/2 pointer-events-none">
            <div
                className="pointer-events-auto flex flex-col items-center gap-3
                bg-slate-900 dark:bg-slate-950
                text-white font-bold text-sm tracking-wider uppercase
                py-4 px-4 rounded-r-2xl
                border-y border-r border-slate-800/80 dark:border-slate-800
                transition-all duration-300 origin-left select-none
                hover:bg-blue-600 dark:hover:bg-blue-600
                hover:pl-6 active:scale-95
                animate-running-shadow group"
            >
                <BiHeart className="text-xl text-rose-500 transition-transform duration-300 group-hover:scale-125 group-hover:animate-pulse" />

                <DonateModal />
            </div>
        </div>
    );
}