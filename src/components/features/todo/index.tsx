"use client";

import TodoFilter, { TodoResetFilter } from "./TodoFilter";
import TodoModal from "./TodoModal";

const Todo: React.FC = () => {
    return (
        <div className="flex flex-col items-start w-full">
            <div className="flex flex-row justify-around items-center w-full">
                <TodoModal />
                <div className="flex flex-row gap-1">
                    <TodoFilter />
                    <TodoResetFilter />
                </div>
            </div>
        </div>
    );
};

export default Todo;
