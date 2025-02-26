"use client";

import { siteConfig } from "@/config/site";
import useAdminGuard from "@/hooks/useAdminGuard";
import { LoadingIcon } from "../common";

/**
 * AdminLayout component restricts access to authenticated and authorized users only.
 * It uses the `useAdminGuard` hook to determine if a user is loading or unauthorized.
 * If the user is unauthorized or the authentication state is still loading, a loading
 * icon is displayed. Otherwise, it renders the children components.
 *
 * @component
 * @param {React.PropsWithChildren} props - The children components to be rendered
 * if the user is authenticated and authorized.
 * @returns {JSX.Element} The rendered component or a loading icon during loading
 * or unauthorized access.
 */
const AdminLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    //* prevent access unauthenticated users and unauthorized users
    const { loading, currentUser } = useAdminGuard();

    if (loading || currentUser?.username !== siteConfig.admin.username)
        return <LoadingIcon className="flex justify-center w-full fill-primary" />;
    return <>{children}</>;
};

export default AdminLayout;
