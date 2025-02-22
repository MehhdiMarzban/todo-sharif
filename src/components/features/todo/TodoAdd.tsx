import { PlusCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import TodoForm from "./TodoForm";
import TodoModal from "./TodoModal";

/**
 * `TodoAdd` component renders a button that triggers a modal for adding a new task.
 * 
 * The modal is rendered using the `TodoModal` component, with the `TriggerButton` and `TodoForm` components passed as props.
 * 
 * @component
 * @example
 * return (
 *   <TodoAdd />
 * )
 */
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
