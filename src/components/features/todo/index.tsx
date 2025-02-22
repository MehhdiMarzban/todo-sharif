"use client";

import useAppStore from "@/stores/AppState";
import TodoAdd from "./TodoAdd";
import TodoCount from "./TodoCount";
import TodoFilter, { TodoResetFilter } from "./TodoFilter";
import TodoList from "./TodoList";
import Intro from "../intro";

/**
 * The `Todo` component is the main component for managing the todo list feature.
 * It conditionally renders the `Intro` component if there is no current user.
 * If a user is present, it displays the todo list management interface.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 *
 * @remarks
 * This component uses the `useAppStore` hook to access the current user state.
 * It includes the following sub-components:
 * - `TodoFilter`: For filtering the todo list.
 * - `TodoResetFilter`: For resetting the todo list filters.
 * - `TodoAdd`: For adding new todos.
 * - `TodoCount`: For displaying the count of todos.
 * - `TodoList`: For displaying the list of todos.
 * - `Intro`: For displaying an introduction when no user is logged in.
 */
const Todo: React.FC = () => {
    const { currentUser } = useAppStore();

    if (!currentUser) {
        return <Intro />;
    }
    
    return (
        <div className="flex flex-col items-start max-w-2xl w-full mx-auto">
            <div className="flex flex-row justify-around items-center w-full">
                {/* todo filter management */}
                <div className="flex flex-row gap-1">
                    <TodoFilter />
                    <TodoResetFilter />
                </div>
                <TodoAdd />
                <TodoCount />
            </div>
            <TodoList />
        </div>
    );
};

export default Todo;
