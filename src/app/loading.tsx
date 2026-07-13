"use client";

import React, { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';

const GlobalLoading = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Watch dark mode class state on mount/change to swap the spinner color accurately
    useEffect(() => {
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };

        checkDarkMode();

        // Create a MutationObserver to react to runtime class switches dynamically
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/70 dark:bg-slate-950/70 backdrop-blur-md transition-all duration-300">
            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl">

                {/* ScaleLoader customized with dark-adaptive branding colors */}
                <ScaleLoader
                    color={isDarkMode ? "#60a5fa" : "#2563eb"}
                    height={40}
                    width={5}
                    radius={3}
                    margin={3}
                />

                {/* Brand matched loading typography */}
                <div className="text-center mt-2 animate-pulse">
                    <p className="text-sm font-semibold tracking-wider text-slate-700 dark:text-slate-200 uppercase">
                        Loading Experience
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                        Please wait a moment...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GlobalLoading;