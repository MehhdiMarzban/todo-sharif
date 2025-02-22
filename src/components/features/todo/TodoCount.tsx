"use client";
import useAppStore from "@/stores/AppState";
import NumberFlow from "@number-flow/react";

interface TodoCountProps {
    isDashboard?: boolean;
}

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
