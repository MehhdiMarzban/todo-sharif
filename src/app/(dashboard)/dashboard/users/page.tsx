import { Metadata } from "next";
import { DashboardUsersPage } from "@/components/features/dashboard";

export const metadata : Metadata = {
    title: "کاربران",
}
const UsersPage: React.FC = () => {
    return <DashboardUsersPage />
}
export default UsersPage;