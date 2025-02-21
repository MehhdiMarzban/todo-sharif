"use client";

import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";

const Todo: React.FC = () => {
    return (
        <div className="flex flex-col items-start">
            <div className="flex flex-row justify-around items-center bg-amber-200">
                <TodoModal />
                <TodoFilter />
            </div>
        </div>
    );
};

export default Todo;
