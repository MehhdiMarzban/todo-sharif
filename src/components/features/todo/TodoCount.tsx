"use client";
import useAppStore from "@/stores/AppState";
import NumberFlow from "@number-flow/react";

interface TodoCountProps {
    isDashboard?: boolean;
}

/**
 * A component that displays the count of todos.
 *
 * @component
 * @param {TodoCountProps} props - The props for the TodoCount component.
 * @param {boolean} [props.isDashboard=false] - Flag indicating if the count is for the dashboard.
 *
 * @returns {JSX.Element} The rendered TodoCount component displaying the number of todos.
 *
 * @remarks
 * - Utilizes the `useAppStore` hook to retrieve todos data.
 * - Uses `NumberFlow` to animate the display of the todo count.
 * - Displays the total count of all todos when `isDashboard` is true, otherwise displays the count of the current user's todos.
 */

const TodoCount: React.FC<TodoCountProps> = ({ isDashboard = false }) => {
    const { currentUser, todos } = useAppStore();
    return (
        <h2 className="text-right font-medium text-xs sm:text-sm bg-secondary text-secondary-foreground p-2 rounded-sm">
            {" تسک ها : "}
            <NumberFlow
                aria-hidden
                willChange
                format={{ useGrouping: false }}
                value={isDashboard ? todos.length : currentUser?.todos.length || 0}
            />
        </h2>
    );
};

export default TodoCount;
