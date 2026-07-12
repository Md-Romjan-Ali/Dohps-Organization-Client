"use client";

import Link from "next/link";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

export default function ErrorPage() {


    return (
        <div className="min-h-[85vh] flex items-center justify-center bg-slate-50/50 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-md w-full text-center">
                {/* Error Icon Graphic */}
                <div className="relative mx-auto flex items-center justify-center h-20 w-20 rounded-3xl bg-rose-50 text-rose-500 text-4xl mb-6 
                                shadow-sm shadow-rose-100 animate-bounce duration-1000">
                    <FaExclamationTriangle />
                </div>

                {/* Main Typography */}
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-3">
                    Something went wrong
                </h1>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                    An unexpected error occurred while processing your request. We have been notified and are looking into it.
                </p>
                {/* Dynamic Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">


                    {/* Back Home Button */}
                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-slate-700 font-semibold transition-all duration-200 hover:bg-slate-50 hover:text-blue-600 hover:border-slate-300 active:scale-95 shadow-sm"
                    >
                        <FaHome className="text-base" />
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
}