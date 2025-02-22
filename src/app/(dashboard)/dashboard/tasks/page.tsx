import DashboardTasksPage from "@/components/features/dashboard/DashboardTasksPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "تسک ها",
};
const TasksPage: React.FC = () => {
    return <DashboardTasksPage />;
};
export default TasksPage;
