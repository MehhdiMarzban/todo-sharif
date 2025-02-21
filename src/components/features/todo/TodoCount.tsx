"use client";
import useAppStore from "@/stores/AppState";
import NumberFlow from "@number-flow/react";

const TodoCount: React.FC = () => {
    const { todos } = useAppStore();
    return (
        <h2 className="text-right font-medium text-xs sm:text-sm bg-secondary text-secondary-foreground p-2 rounded-sm">
            {" تسک ها : "}
            <NumberFlow aria-hidden willChange format={{ useGrouping: false }} value={todos.length} />
        </h2>
    );
};

export default TodoCount;
