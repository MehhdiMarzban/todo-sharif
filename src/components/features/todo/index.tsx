"use client";

import TodoCount from "./TodoCount";
import TodoFilter, { TodoResetFilter } from "./TodoFilter";
import TodoList from "./TodoList";
import TodoModal from "./TodoModal";

const Todo: React.FC = () => {
    return (
        <div className="flex flex-col items-start max-w-2xl w-full mx-auto">
            <div className="flex flex-row justify-around items-center w-full">
                {/* todo filter management */}
                <div className="flex flex-row gap-1">
                    <TodoFilter />
                    <TodoResetFilter />
                </div>
                <TodoModal />
                <TodoCount />
            </div>
            <TodoList />
        </div>
    );
};

export default Todo;
