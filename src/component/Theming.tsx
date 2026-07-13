"use client";

import { useTheme } from "next-themes";
import { IoSunnySharp } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <MdOutlineDarkMode size={25} className="bg-gray-800 h-10 w-10 rounded-full p-2" /> : <IoSunnySharp size={25} className="bg-gray-300 h-10 w-10 rounded-full p-2" />}
        </button>
    );
}