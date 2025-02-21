"use client";

import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";

const Todo: React.FC = () => {
    return <div className="flex flex-col md:flex-row">
        <TodoModal />
        <TodoFilter />
    </div>;
};

export default Todo;
