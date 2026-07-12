"use client";

import React from 'react';
import { ScaleLoader } from 'react-spinners';

const GlobalLoading = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/70 backdrop-blur-md transition-all duration-300">
            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl">
                {/* ScaleLoader customized with your brand's primary blue color */}
                <ScaleLoader
                    color="#2563eb"
                    height={40}
                    width={5}
                    radius={3}
                    margin={3}
                />

                {/* Brand matched loading typography */}
                <div className="text-center mt-2 animate-pulse">
                    <p className="text-sm font-semibold tracking-wider text-slate-700 uppercase">
                        Loading Experience
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                        Please wait a moment...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GlobalLoading;