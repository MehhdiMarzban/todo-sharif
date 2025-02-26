"use client";
import Signin from "./Signin";
import Signup from "./Signup";
import TabsAuth from "./TabsAuth";

/**
 * Auth component serves as the main authentication interface, rendering
 * the TabsAuth component with Signin and Signup functionalities.
 *
 * @component
 * @returns {JSX.Element} The rendered Auth component with sign-in and sign-up tabs.
 */
const Auth: React.FC = () => {
    return (
        <div className="max-w-lg mx-auto">
            <TabsAuth SigninComponent={Signin} SignupComponent={Signup} />
        </div>
    );
};

export default Auth;
