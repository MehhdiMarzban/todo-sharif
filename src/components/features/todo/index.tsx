"use client";

import useIsUserLoaded from "@/hooks/useIsUserLoaded";
import TodoAdd from "./TodoAdd";
import TodoCount from "./TodoCount";
import TodoFilter, { TodoResetFilter } from "./TodoFilter";
import TodoList from "./TodoList";
import Intro from "../intro";
import { LoadingIcon } from "@/components/common";

/**
 * The `Todo` component is the main component for the todo feature.
 * It handles the loading state, user authentication, and renders
 * the todo list along with its associated features such as adding,
 * filtering, and counting todos.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @remarks
 * This component uses the `useIsUserLoaded` hook to check if the user
 * is loaded and authenticated. If the user is not loaded, it displays
 * a loading icon. If the user is not authenticated, it displays the
 * `Intro` component. Once the user is authenticated, it displays the
 * todo list and its associated features.
 */
const Todo: React.FC = () => {
    const { currentUser, loading } = useIsUserLoaded();

    if (loading) {
        return <LoadingIcon className="flex justify-center w-full fill-primary" />;
    }
    if (!loading && !currentUser) {
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
