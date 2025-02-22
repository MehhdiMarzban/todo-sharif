"use client";

import useAppStore from "@/stores/AppState";
import TodoCount from "../todo/TodoCount";
import TodoFilter, { TodoResetFilter } from "../todo/TodoFilter";
import TodoList from "../todo/TodoList";

/**
 * DashboardTasksPage component displays a list of todos with optional filtering and animation.
 *
 * @component
 * @returns {JSX.Element} The rendered DashboardTasksPage component.
 *
 * @remarks
 * - Uses `useAppStore` hook to retrieve the list of todos.
 * - Displays the `TodoFilter`, `TodoResetFilter` and `TodoCount` components for filtering and counting todos.
 * - Displays the `TodoList` component for listing todos.
 */
const DashboardTasksPage: React.FC = () => {
    const { todos } = useAppStore();

    return (
        <div className="flex flex-col items-start max-w-2xl w-full mx-auto">
            <div className="flex flex-row justify-around items-center w-full">
                {/* todo filter management */}
                <div className="flex flex-row gap-1">
                    <TodoFilter />
                    <TodoResetFilter />
                </div>
                <TodoCount isDashboard />
            </div>
            <TodoList isDashboard allTodos={todos} />
        </div>
    );
};

export default DashboardTasksPage;
