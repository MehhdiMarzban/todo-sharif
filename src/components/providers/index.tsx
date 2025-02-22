"use client";

import NuqsProvider from "./Nuqs-Provider";
import ToastProvider from "./Toast-Provider";
/**
 * AppProviders component is a React functional component that acts as a wrapper
 * for the application. It includes various context providers or global components
 * needed throughout the app, such as the ToastProvider for notifications.
 *
 * @param children - The child components that will be wrapped by the AppProviders.
 * @returns A React fragment containing the provided children and required providers.
 */
const AppProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <NuqsProvider>
                <ToastProvider />
                {children}
            </NuqsProvider>
        </>
    );
};

export default AppProviders;
