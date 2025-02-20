import Signin from "./Signin";
import Signup from "./Signup";
import TabsAuth from "./TabsAuth";

const Auth: React.FC = () => {
    return (
        <div className="max-w-lg mx-auto">
            <TabsAuth SigninComponent={Signin} SignupComponent={Signup} />
        </div>
    );
};

export default Auth;
