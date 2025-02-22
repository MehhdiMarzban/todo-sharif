"use client";
import useAppStore from "@/stores/AppState";
import NumberFlow from "@number-flow/react";

/**
 * A React functional component that displays the count of todos for the current user.
 * 
 * This component uses the `useAppStore` hook to access the current user's todos from the global state.
 * It displays the count of todos using the `NumberFlow` component for animating the number.
 * 
 * @component
 * @example
 * // Usage example:
 * // <TodoCount />
 * 
 * @returns {JSX.Element} A styled heading element displaying the count of todos.
 */
const TodoCount: React.FC = () => {
    const { currentUser } = useAppStore();
    return (
        <h2 className="text-right font-medium text-xs sm:text-sm bg-secondary text-secondary-foreground p-2 rounded-sm">
            {" تسک ها : "}
            <NumberFlow aria-hidden willChange format={{ useGrouping: false }} value={currentUser?.todos?.length || 0} />
        </h2>
    );
};

export default TodoCount;
