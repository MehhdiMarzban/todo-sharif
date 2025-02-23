"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;