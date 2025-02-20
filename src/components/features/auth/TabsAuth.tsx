import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

interface TabsAuthProps {
    SigninComponent: React.FC;
    SignupComponent: React.FC;
}
/**
 * A component that renders a signin/signup tabs.
 *
 * @example
 * import Signin from "./Signin";
 * import Signup from "./Signup";
 *
 * <TabsAuth SigninComponent={Signin} SignupComponent={Signup} />
 *
 * @param {React.FC} SigninComponent - The signin component.
 * @param {React.FC} SignupComponent - The signup component.
 * @returns {React.ReactElement} - The TabsAuth component.
 */
const TabsAuth: React.FC<TabsAuthProps> = ({ SigninComponent, SignupComponent }) => {
    return (
        <Tabs className="shrink-0" dir="rtl" defaultValue="signin">
            <TabsList className="grid w-full grid-cols-2 h-11 rounded-b-none" >
                <TabsTrigger className="text-base" value="signin">ورود</TabsTrigger>
                <TabsTrigger className="text-base" value="signup">ثبت نام</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
                <SigninComponent />
            </TabsContent>
            <TabsContent value="signup">
                <SignupComponent />
            </TabsContent>
        </Tabs>
    );
};

export default TabsAuth;
