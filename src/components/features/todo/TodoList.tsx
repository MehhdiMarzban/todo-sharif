"use client";

import { AnimatePresence, motion } from 'motion/react';
import { useQueryState } from "nuqs";
import useAppStore from "@/stores/AppState";
import { todoStateValues } from "@/types/Todo";
import TodoEmpty from "./TodoEmpty";
import TodoItem from './TodoItem';

/**
 * TodoList component that displays a list of todos based on the current filter.
 * 
 * This component uses the `useQueryState` hook to get the current filter state and 
 * the `useAppStore` hook to get the current user's todos. It filters the todos based 
 * on the selected filter and displays them using the `AnimatePresence` and `motion` 
 * components from the `motion/react` library for animations.
 * 
 * If there are no todos, it displays the `TodoEmpty` component.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const TodoList: React.FC = () => {
    const [filter] = useQueryState("filter");
    const { currentUser } = useAppStore();
    
    const todos = currentUser?.todos || [];

    //* filter todos by selected filter
    const filteredTodos = todos?.filter((todo) => {
        switch (filter) {
            case todoStateValues[0]: //* check is done
                return todo.state === todoStateValues[0];
            case todoStateValues[1]: //* check is doing
                return todo.state === todoStateValues[1];
            case todoStateValues[2]: //* check is waiting
                return todo.state === todoStateValues[2];
            default:
                return true;
        }
    });

    return (
        <div className="flex flex-col w-full my-4 gap-2">
            {todos.length === 0 ? (
                <TodoEmpty />
            ) : (
                <AnimatePresence>
                    {filteredTodos?.map((todo) => (
                        <motion.div
                            key={todo.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.15 }}>
                            <TodoItem todo={todo} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            )}
        </div>
    );
};

export default TodoList;
