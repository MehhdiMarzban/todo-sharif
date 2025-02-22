import { UsersList } from "@/components/features/dashboard/DashboardUsersPage";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "کاربران",
}
const UsersPage: React.FC = () => {
    return <UsersList />
}
export default UsersPage;