"use client";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { cn, fromNow } from "@/lib/utils";
import { Todo } from "@/types";
import { todoStateValues } from "@/types/Todo";
import TodoDelete from "./TodoDelete";

interface TodoItemProps {
    todo: Todo;
}
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const { id, state, title, date } = todo;
    return (
        <div className={cn("rounded-md border bg-card p-2", {
            "bg-primary/5" : state === todoStateValues[2], //* for done todo
            "bg-chart-4/20" : state === todoStateValues[1], //* for doing todo

        })}>
            <div className="flex flex-col">
                <label
                    htmlFor={id}
                    className={cn("flex w-full cursor-pointer items-center gap-2 text-sm", {
                        "text-muted-foreground line-through": state === todoStateValues[2], //* for done todo
                    })}>
                    <Checkbox
                        id={id}
                        checked={state === todoStateValues[2]}
                        // onCheckedChange={handleComplete}
                    />
                    <p className="text-sm md:text-base truncate">{title}</p>
                </label>
                <div className="flex items-end justify-between gap-2">
                    <p className="flex-1 text-xs md:text-sm mt-1 md:mt-2 text-muted-foreground">{fromNow(date)}</p>
                    <Badge className="w-20" variant={"outline"}>{state}</Badge>
                    <TodoDelete todo={todo} />
                    {/* <TodoEdit todo={todo} />
                    <TodoRemove todo={todo} /> */}
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
