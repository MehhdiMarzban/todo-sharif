"use client";

import useAuthGuard from "@/hooks/useAuthGuard";
import { TabsAuthSkeleton } from "../features/auth/TabsAuth";


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
