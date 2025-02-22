import { Button } from "@/components/ui/button";
import TodoForm from "./TodoForm";
import TodoModal from "./TodoModal";
import { PlusCircleIcon } from "lucide-react";

const TodoAdd: React.FC = () => {
    return (
        <TodoModal TriggerButton={TriggerButton} FormRender={TodoForm} title="افزودن تسک جدید" />
    );
};
const TriggerButton = (
    <Button className="max-w-sm">
        <PlusCircleIcon />
        <span className="hidden md:flex">افزودن تسک</span>
    </Button>
);
export default TodoAdd;
