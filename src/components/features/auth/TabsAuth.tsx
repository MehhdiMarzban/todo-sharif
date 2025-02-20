import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

interface TabsAuthProps {
    SigninComponent: React.FC;
    SignupComponent: React.FC;
}
const TabsAuth: React.FC<TabsAuthProps> = ({ SigninComponent, SignupComponent }) => {
    return (
        <Tabs dir="rtl" defaultValue="signin">
            <TabsList className="grid w-full grid-cols-2 h-11" >
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
