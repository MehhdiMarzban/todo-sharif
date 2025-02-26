"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";



/**
 * ThemeProvider component is a wrapper around the NextThemesProvider 
 * from the "next-themes" package, allowing for theme context to be 
 * provided throughout the application.
 * @param {React.PropsWithChildren} props - The properties for the ThemeProvider component, 
 * including any additional props that are passed to the NextThemesProvider.
 * @param {React.ReactNode} props.children - The child components that will have access 
 * to the theme context.
 * @returns {JSX.Element} The rendered NextThemesProvider component with the provided children.
 */

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;