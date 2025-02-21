"use client";

import TodoModal from "./TodoModal";

const Todo: React.FC = () => {
    return <div className="flex flex-col md:flex-row">
        <TodoModal />
    </div>;
};

export default Todo;
