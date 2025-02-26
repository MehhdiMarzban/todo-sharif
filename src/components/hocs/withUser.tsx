import useAuthGuard from "@/hooks/useAuthGuard";
import { User } from "@/types";
import { LoadingIcon } from "../common";

const withUser = (
    Component: React.FC<{ user: User | undefined; loading?: boolean }>,
    redirect: boolean = false
): React.FC => {
    return () => {
        //* redirect if needed
        const { loading, currentUser } = useAuthGuard(redirect);
        if (loading) return <LoadingIcon className="flex justify-center w-full fill-primary" />;
        if (!loading && currentUser) return <Component user={currentUser} loading={loading} />;
        return <Component user={currentUser} loading={loading} />;
    };
};

export default withUser;
