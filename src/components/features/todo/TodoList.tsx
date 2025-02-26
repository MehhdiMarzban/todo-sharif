"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo } from "react";
import { useQueryState } from "nuqs";
import useAppStore from "@/stores/AppState";
import Todo, { todoStateValues } from "@/types/Todo";
import TodoEmpty from "./TodoEmpty";
import TodoItem from "./TodoItem";

interface TodoListProps {
    isDashboard?: boolean;
    allTodos?: Todo[];
}

/**
 * TodoList component displays a list of todos with optional filtering and animation.
 *
 * @component
 * @param {TodoListProps} props - The props for the TodoList component.
 * @param {boolean} [props.isDashboard=false] - Indicates if the component is used in a dashboard context.
 * @param {Todo[]} [props.allTodos] - An optional array of all todos to display.
 *
 * @returns {JSX.Element} The rendered TodoList component.
 *
 * @example
 * <TodoList isDashboard={true} allTodos={todos} />
 *
 * @remarks
 * - If `allTodos` is not provided, the component will use the current user's todos from the app store.
 * - The component filters todos based on the `filter` query state.
 * - Uses `AnimatePresence` and `motion` from the `motion/react` library for animations.
 */
const TodoList: React.FC<TodoListProps> = ({ allTodos, isDashboard = false }) => {
    const [filter] = useQueryState("filter");
    const currentUserTodos = useAppStore((state) => state.currentUser?.todos);

    //* checking todos;
    let todos: Todo[] = [];
    if (allTodos) {
        todos = allTodos;
    } else {
        todos = currentUserTodos || [];
    }
    //* filter todos by selected filter and memorized
    const filteredTodos = useMemo(
        () =>
            todos?.filter((todo) => {
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
            }),
        [filter, todos]
    );

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
                            <TodoItem isDashboard={isDashboard} todo={todo} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            )}
        </div>
    );
};

export default TodoList;
