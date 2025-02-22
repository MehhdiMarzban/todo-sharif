import { Metadata } from "next";
import { DashboardTasksPage } from "@/components/features/dashboard";

export const metadata: Metadata = {
    title: "تسک ها",
};
const TasksPage: React.FC = () => {
    return <DashboardTasksPage />;
};
export default TasksPage;
