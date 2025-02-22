import { LoadingIcon } from "@/components/common";

const Loading: React.FC = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <LoadingIcon className="fill-primary" />
        </div>
    );
};

export default Loading;
