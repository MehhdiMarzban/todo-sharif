"use client";

import { siteConfig } from "@/config/site";
import useAuthGuard from "@/hooks/useAuthGuard";
import { LoadingIcon } from "./Icons";

const AdminLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    //* prevent access unauthenticated users and unauthorized users
    const { loading, currentUser } = useAuthGuard(true, "/", true);

    if (loading || currentUser?.username !== siteConfig.admin.username)
        return <LoadingIcon className="flex justify-center w-full fill-primary" />;
    return <>{children}</>;
};

export default AdminLayout;
