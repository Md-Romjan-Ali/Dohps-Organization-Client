"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-10 w-10 rounded-xl bg-default-100 animate-pulse" />;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-default-200 bg-background text-default-600 
                       transition-all duration-200 active:scale-95 focus:outline-none hover:bg-default-100"
            aria-label="Toggle theme"
        >
            <div className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-110">
                <FiSun className={`absolute inset-0 h-full w-full text-warning transition-all duration-300 ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-45 opacity-0"
                    }`} />
                <FiMoon className={`absolute inset-0 h-full w-full text-primary transition-all duration-300 ${!isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-45 opacity-0"
                    }`} />
            </div>
        </button>
    );
}