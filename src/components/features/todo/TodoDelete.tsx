"use client";

import { Todo } from "@/types";
import TodoModal from "./TodoModal";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import useAppStore from "@/stores/AppState";
import { useTransition } from "react";
import { LoadingIcon } from "@/components/common";

interface TodoDeleteProps {
    todo: Todo;
    onClose?: () => void;
}
/**
 * A component that renders a button that triggers a modal
 * for deleting a given task. The modal renders a form with
 * a single button that triggers the deletion of the task.
 *
 * The component accepts a single prop, `todo`, which is the
 * task to be deleted.
 *
 * @param {{todo: Todo}} props - The component props.
 * @param {Todo} props.todo - The task to be deleted.
 */
const TodoDelete: React.FC<TodoDeleteProps> = ({ todo }) => {
    return (
        <TodoModal
            title="حذف تسک"
            withCancelButton
            TriggerButton={TriggerButton}
            FormRender={TodoDeleteForm.bind(null, { todo })}
        />
    );
};

/**
 * TodoDeleteForm component renders a confirmation dialog for deleting a todo item.
 * 
 * It displays the title of the todo and provides a button to confirm deletion.
 * The deletion process is handled with a transition to provide feedback during
 * the asynchronous operation.
 * 
 * @component
 * @param {TodoDeleteProps} props - The properties for the TodoDeleteForm component.
 * @param {Todo} props.todo - The todo item to be deleted.
 * 
 * @returns {JSX.Element} The rendered TodoDeleteForm component.
 */
const TodoDeleteForm: React.FC<TodoDeleteProps> = ({ todo }) => {
    const { deleteTodo } = useAppStore();
    const [isPending, startTransition] = useTransition();
    const handleDelete = () => {
        startTransition(() => {
            deleteTodo(todo);
        });
    };
    return (
        <div className="flex flex-1 flex-col gap-3">
            <div className="w-full max-w-sm mx-auto space-y-2">
                <h3 className="text-base">آیا از حذف کردن تسک زیر مطمن هستید ؟</h3>
                <p className="text-sm text-secondary-foreground truncate">{todo.title}</p>
                <div className="space-x-1.5 *:w-full flex">
                    <Button variant={"destructive"} onClick={handleDelete}>
                        {isPending ? <LoadingIcon /> : "حذف"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

const TriggerButton = (
    <Button
        size="icon"
        variant="outline"
        className="size-8 text-destructive hover:text-destructive">
        <Trash2Icon />
    </Button>
);

export default TodoDelete;
