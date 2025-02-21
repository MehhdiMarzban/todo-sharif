import NumberFlow from '@number-flow/react';

const TodoCount: React.FC = () => {
    return (
        <h2 className="text-right font-medium text-sm bg-secondary text-secondary-foreground p-2 rounded-sm">
            {" تسک ها : "}
            <NumberFlow aria-hidden willChange format={{ useGrouping: false }} value={2} />
        </h2>
    );
};

export default TodoCount;