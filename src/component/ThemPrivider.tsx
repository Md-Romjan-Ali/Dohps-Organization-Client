"use client";
import { ThemeProvider } from 'next-themes';
import React from 'react';

const ThemPrivider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <ThemeProvider>
                {children}
            </ThemeProvider>

        </div>
    );
};

export default ThemPrivider;