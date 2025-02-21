"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { cn, fromNow } from "@/lib/utils";
import { Todo } from "@/types";
import { TodoState } from "@/types/Todo";

interface TodoItemProps {
    todo: Todo;
}
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const { id, state, title, date } = todo;
    return (
        <div className="rounded-md border bg-card p-2">
            <div className="flex flex-col">
                <label
                    htmlFor={id}
                    className={cn("flex w-fit cursor-pointer items-center gap-2 text-sm", {
                        "text-muted-foreground line-through": state === TodoState.done,
                    })}>
                    <Checkbox
                        id={id}
                        className={cn({ "text-chart-3": state === TodoState.doing })}
                        checked={state === TodoState.done}
                        // onCheckedChange={handleComplete}
                    />
                    <p>{title}</p>
                </label>
                <div className="flex items-end justify-between gap-2">
                    <p className="flex-1 text-[10px] text-muted-foreground">{fromNow(date)}</p>
                    {/* <TodoEdit todo={todo} />
                    <TodoRemove todo={todo} /> */}
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
