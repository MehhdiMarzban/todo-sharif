"use client";

import ToastProvider from "./Toast-Provider";
const AppProviders: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <>
            <ToastProvider />
            {children}
        </>
    );
};

export default AppProviders;
