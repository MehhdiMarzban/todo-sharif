"use client";
import Signin from "./Signin";
import Signup from "./Signup";
import TabsAuth from "./TabsAuth";
import useAuthGuard from "@/hooks/useAuthGuard";

const Auth: React.FC = () => {
    //* this hook check if user is logged in then redirect to "/"
    const {currentUser, loading} = useAuthGuard();
    if(currentUser || loading) return null;

    return (
        <div className="max-w-lg mx-auto">
            <TabsAuth SigninComponent={Signin} SignupComponent={Signup} />
        </div>
    );
};

export default Auth;
