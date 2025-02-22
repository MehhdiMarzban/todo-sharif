"use client";

import { LoadingIcon } from "@/components/common";
import { siteConfig } from "@/config/site";
import useAuthGuard from "@/hooks/useAuthGuard";
import DashboardStates from "./DashboardStates";

const Dashboard: React.FC = () => {
    //* prevent access unauthenticated users and unauthorized users
    const { loading, currentUser } = useAuthGuard(true, "/", true);

    if (loading || currentUser?.username !== siteConfig.admin.username)
        return <LoadingIcon className="flex justify-center w-full fill-primary" />;

    return <DashboardStates />;
};

export default Dashboard;
