"use client";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { cn, fromNow } from "@/lib/utils";
import { Todo } from "@/types";
import { todoStateValues } from "@/types/Todo";
import TodoDelete from "./TodoDelete";
import useAppStore from "@/stores/AppState";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TodoItemProps {
    todo: Todo;
}

/**
 * A component that represents a single todo item.
 *
 * @component
 * @param {TodoItemProps} props - The properties for the TodoItem component.
 * @param {Todo} props.todo - The todo item to be displayed.
 *
 * @returns {JSX.Element} The rendered TodoItem component.
 *
 * @example
 * const todo = {
 *   id: '1',
 *   state: 'todo',
 *   title: 'Learn TypeScript',
 *   date: new Date(),
 *   user: { username: 'mehdi_marzban' }
 * };
 *
 * <TodoItem todo={todo} />
 */
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const { id, state, title, date } = todo;
    const { updateTodo } = useAppStore();
    const handleUpdateTodo = () => {
        let newState: Todo["state"] = todoStateValues[0];
        switch (todo.state) {
            case todoStateValues[0]:
                newState = todoStateValues[1];
                break;
            case todoStateValues[1]:
                newState = todoStateValues[2];
                break;
            case todoStateValues[2]:
                newState = todoStateValues[0];
                break;
        }
        const newTodo = {
            ...todo,
            state: newState,
        };
        updateTodo(newTodo);
    };
    return (
        <div
            className={cn("rounded-md border bg-card p-2 transition-all", {
                "bg-primary/5": state === todoStateValues[2], //* for done todo
                "bg-chart-4/20": state === todoStateValues[1], //* for doing todo
            })}>
            <div className="flex flex-col">
                <label
                    htmlFor={id}
                    className={cn("flex w-full cursor-pointer items-center gap-2 text-sm", {
                        "text-muted-foreground line-through": state === todoStateValues[2], //* for done todo
                    })}>
                    <Checkbox
                        id={id}
                        className="cursor-pointer"
                        checked={state === todoStateValues[2]}
                        onCheckedChange={handleUpdateTodo}
                    />
                    <p className="text-sm md:text-base truncate">{title}</p>
                </label>
                <div className="flex items-end justify-between gap-2">
                    <p className="flex-1 text-xs md:text-sm mt-1 md:mt-2 text-muted-foreground">
                        {fromNow(date)}
                        {" توسط "}
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>شما</TooltipTrigger>
                                <TooltipContent>
                                    <p>اضافه شده توسط کاربر {todo.user.username}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </p>
                    <Badge className="w-20" variant={"outline"}>
                        {state}
                    </Badge>
                    <TodoDelete todo={todo} />
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
