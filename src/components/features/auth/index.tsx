"use client";
import Signin from "./Signin";
import Signup from "./Signup";
import TabsAuth, { TabsAuthSkeleton } from "./TabsAuth";
import useAuthGuard from "@/hooks/useAuthGuard";

    /**
     * Handles authentication with Signin and Signup components.
     * If the user is logged in, redirect to "/".
     * If the user is not logged in, show the TabsAuth component with Signin and Signup components.
     */
const Auth: React.FC = () => {
    //* this hook check if user is logged in then redirect to "/"
    const { currentUser, loading } = useAuthGuard(true);

    if (currentUser || loading) return <TabsAuthSkeleton />;

    return (
        <div className="max-w-lg mx-auto">
            <TabsAuth SigninComponent={Signin} SignupComponent={Signup} />
        </div>
    );
};

export default Auth;
