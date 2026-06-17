'use client';

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { LucideMoon, LucideSun } from "lucide-react";

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="ml-auto">
            <Button variant="outline" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <LucideSun className="
                    h-4 w-4 rotate-0 opacity-100 transition-all
                    dark:-rotate-90 dark:opacity-0"
                />
                <LucideMoon className="
                    absolute h-4 w-4 rotate-90 opacity-0 transition-transform
                    dark:rotate-0 dark:opacity-100"
                />
            </Button>

            <span className="sr-only">Toggle Theme</span>
        </div>
    );
}

export default ThemeSwitcher;