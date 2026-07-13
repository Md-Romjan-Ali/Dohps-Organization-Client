"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

type ContextType = {
    theme: Theme;
    setTheme: (t: Theme) => void;
    toggleTheme: () => void;
};

const PageThemeContext = createContext<ContextType>({
    theme: "light",
    setTheme: () => { },
    toggleTheme: () => { },
});

export function PageThemeProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname() || "/";
    const [map, setMap] = useState<Record<string, Theme>>({});

    useEffect(() => {
        try {
            const raw = sessionStorage.getItem("pageThemes");
            if (raw) setMap(JSON.parse(raw));
        } catch (e) {
            // ignore
        }
    }, []);

    useEffect(() => {
        try {
            sessionStorage.setItem("pageThemes", JSON.stringify(map));
        } catch (e) {
            // ignore
        }
    }, [map]);

    const theme = (map[pathname] as Theme) ?? "light";

    const setTheme = (t: Theme) => setMap((p) => ({ ...p, [pathname]: t }));
    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <PageThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            <div className={theme === "dark" ? "dark" : ""}>{children}</div>
        </PageThemeContext.Provider>
    );
}

export const usePageTheme = () => useContext(PageThemeContext);
