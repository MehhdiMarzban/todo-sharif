"use client";

import { Todo } from "@/types";
import TodoModal from "./TodoModal";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";

interface TodoDeleteProps {
    todo: Todo;
    onClose?: () => void;
}
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

const TodoDeleteForm: React.FC<TodoDeleteProps> = ({ todo }) => {
    return (
        <div className="flex flex-1 flex-col gap-3">
            <div className="w-full max-w-sm mx-auto space-y-2">
                <h3 className="text-base">آیا از حذف کردن تسک زیر مطمن هستید ؟</h3>
                <p className="text-sm text-secondary-foreground truncate">{todo.title}</p>
                <div className="space-x-1.5 *:w-full flex">
                    <Button variant={"destructive"}>حذف</Button>
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
