"use client";

import useAuthGuard from "@/hooks/useAuthGuard";
import { TabsAuthSkeleton } from "../features/auth/TabsAuth";

/**
 * AuthLayout component handles the authentication state of the user.
 * It uses the `useAuthGuard` hook to check if a user is logged in.
 * If the authentication state is loading, it displays a skeleton loader.
 * If the user is authenticated, it prevents rendering of the children components.
 *
 * @component
 * @param {React.PropsWithChildren} props - The children components to be potentially rendered
 * if the user is not authenticated.
 * @returns {JSX.Element | null} The rendered component, a skeleton loader, or null if the user is authenticated.
 */
const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    //* if user is already login this property of true will be redirected to '/'
    const { loading, currentUser } = useAuthGuard(true);

    if (loading)
        return (
            <div className="mx-4 animate-in fade-in">
                <TabsAuthSkeleton />
            </div>
        );
    if (!loading && currentUser) return null;

    return <>{children}</>;
};

export default AuthLayout;
