"use client";

import useAppStore from "@/stores/AppState";
import { List, User, Check } from "lucide-react";
import DashboardCard from "./DashboardCard";
import { useMemo } from "react";
import { todoStateValues } from "@/types/Todo";
import dynamic from "next/dynamic";
import { LoadingIcon } from "@/components/common";

//* lazy loading the dashboard tasks chart
const DashboardTasksChart = dynamic(() => import("./DashboardTasksChart"), {
    ssr: false,
    loading: () => <div className="flex justify-center mx-auto w-full items-center"><LoadingIcon className="fill-primary" /></div>,
});
/**
 * DashboardStates component displays various statistics about tasks and users.
 * It uses the `useAppStore` hook to retrieve the list of todos and users.
 *
 * The component displays three `DashboardCard` components showing:
 * - The total number of tasks
 * - The number of completed tasks
 * - The total number of users
 *
 * Additionally, it renders a `DashBoardTasksChart` component to visualize the tasks.
 *
 * @component
 * @returns {JSX.Element} The rendered DashboardStates component.
 */
const DashboardStates: React.FC = () => {
    const { todos, users } = useAppStore();

    //* memorize todo completed values
    const memoCompleteTasks = useMemo(
        () => todos.filter((t) => t.state === todoStateValues[2]),
        todos
    );
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <DashboardCard title="تعداد تسک ها" count={todos.length} Icon={List} />
            <DashboardCard
                title="تعداد تسک های کامل شده"
                count={memoCompleteTasks.length}
                Icon={Check}
            />
            <DashboardCard title="تعداد کاربر ها" count={users.length} Icon={User} />
            <DashboardTasksChart todos={todos} />
        </div>
    );
};

export default DashboardStates;
