import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

interface TabsAuthProps {
    SigninComponent: React.FC;
    SignupComponent: React.FC;
}
const TabsAuth: React.FC<TabsAuthProps> = ({ SigninComponent, SignupComponent }) => {
    return (
        <Tabs>
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">ورود</TabsTrigger>
                <TabsTrigger value="signup">ثبت نام</TabsTrigger>
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
