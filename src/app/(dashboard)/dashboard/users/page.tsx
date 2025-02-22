import DashboardUsersPage from "@/components/features/dashboard/DashboardUsersPage";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "کاربران",
}
const UsersPage: React.FC = () => {
    return <DashboardUsersPage />
}
export default UsersPage;