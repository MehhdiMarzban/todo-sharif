"use client";

import dynamic from "next/dynamic";
import TodoAdd from "./TodoAdd";
import TodoCount from "./TodoCount";
import TodoFilter, { TodoResetFilter } from "./TodoFilter";
import { withUser } from "@/components/hocs";
import { User } from "@/types";
import { LoadingIcon } from "@/components/common";

//* dynamic import to reduce size of first load js
const TodoList = dynamic(() => import("./TodoList"), {
    ssr: false,
    loading: () => <LoadingIcon className="fill-primary mx-auto mt-4" />,
});

const Intro = dynamic(() => import("../intro"), {
    ssr: true,
    loading: () => <LoadingIcon className="fill-primary mx-auto" />,
});

/**
 * The `Todo` component is the main component for the todo feature.
 * It handles the loading state, user authentication, and renders
 * the todo list along with its associated features such as adding,
 * filtering, and counting todos.
 *
 * @component
 * @props this component get all props with a high order component named withUser and doesn't need to send the props, it's all automatic
 * @param {user} User - the current user account
 * @param {loading} boolean - show state loading 
 * @returns {JSX.Element} The rendered component.
 *
 * @remarks
 * This component uses the `useIsUserLoaded` hook to check if the user
 * is loaded and authenticated. If the user is not loaded, it displays
 * a loading icon. If the user is not authenticated, it displays the
 * `Intro` component. Once the user is authenticated, it displays the
 * todo list and its associated features.
 */
const Todo: React.FC<{ user: User | undefined }> = ({ user }) => {
    if (!user) {
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

export default withUser(Todo);
