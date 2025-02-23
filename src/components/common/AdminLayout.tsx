"use client";

import { siteConfig } from "@/config/site";
import { LoadingIcon } from "./Icons";
import useAdminGuard from "@/hooks/useAdminGuard";

const AdminLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    //* prevent access unauthenticated users and unauthorized users
    const { loading, currentUser } = useAdminGuard();

    if (loading || currentUser?.username !== siteConfig.admin.username)
        return <LoadingIcon className="flex justify-center w-full fill-primary" />;
    return <>{children}</>;
};

export default AdminLayout;
