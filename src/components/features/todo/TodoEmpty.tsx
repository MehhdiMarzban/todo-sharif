/**
 * A functional component that renders an empty state message when there are no todos.
 *
 * This component displays a centered text message indicating that there are no tasks available.
 * It is styled using TailwindCSS classes for spacing, text alignment, and responsiveness.
 *
 * @component
 * @returns {JSX.Element} The rendered TodoEmpty component.
 */

const TodoEmpty: React.FC = () => {
    return (
        <div className="py-8">
            <p className="my-4 text-center text-foreground/80 text-sm lg:text-lg">تسکی وجود ندارد !</p>
        </div>
    );
};

export default TodoEmpty;