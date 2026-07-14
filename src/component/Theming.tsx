"use client";

import { useTheme } from "next-themes";
import { IoSunnySharp } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";

export function ThemeSwitch() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle Theme"
            className="transition-transform duration-300 hover:scale-110 active:scale-95"
        >
            {resolvedTheme === "dark" ? (
                <MdOutlineDarkMode
                    size={24}
                    className="h-10 w-10 rounded-full bg-gray-800 text-white p-2"
                />
            ) : (
                <IoSunnySharp
                    size={24}
                    className="h-10 w-10 rounded-full bg-gray-300 p-2"
                />
            )}
        </button>
    );
}