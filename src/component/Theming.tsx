"use client";

import { useTheme } from "next-themes";
import { IoSunnySharp } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { usePageTheme } from "@/lib/PageThemeProvider";

export function ThemeSwitch() {
    const { theme: globalTheme, setTheme } = useTheme();
    const { theme: pageTheme, setTheme: setPageTheme, toggleTheme } = usePageTheme();

    // prefer page-scoped theme if set, otherwise reflect global theme
    const activeTheme = pageTheme || globalTheme || "light";

    const onClick = () => {
        const next = activeTheme === "dark" ? "light" : "dark";
        setPageTheme(next);
        // also update global so components using useTheme reflect change if needed
        setTheme(next);
    };

    return (
        <button onClick={onClick} aria-label="Toggle theme">
            {activeTheme === "dark" ? (
                <MdOutlineDarkMode size={25} className="bg-gray-800 h-10 w-10 rounded-full p-2" />
            ) : (
                <IoSunnySharp size={25} className="bg-gray-300 h-10 w-10 rounded-full p-2" />
            )}
        </button>
    );
}