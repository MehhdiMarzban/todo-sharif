import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
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
            <TabsList className="grid w-full grid-cols-2 h-11 rounded-b-none">
                <TabsTrigger className="text-base" value="signin">
                    ورود
                </TabsTrigger>
                <TabsTrigger className="text-base" value="signup">
                    ثبت نام
                </TabsTrigger>
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

export const TabsAuthSkeleton: React.FC = () => {
    return (
        <Tabs dir="rtl" className="max-w-lg mx-auto" defaultValue="signin">
            <TabsList className="grid w-full grid-cols-2 h-11 rounded-b-none">
                <TabsTrigger value="signin">
                    <Skeleton className="h-5 w-full" />
                </TabsTrigger>
                <TabsTrigger value="signup">
                    <Skeleton className="h-5 w-full" />
                </TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
                <Card className="p-6 rounded-t-none h-[307px]">
                    <div className="flex flex-col gap-3 justify-center items-center mb-6">
                        <Skeleton className="w-20 h-6" />
                        <Skeleton className="w-50 h-5" />
                    </div>
                    <div className="space-y-7 max-w-sm mx-auto *:h-9">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                </Card>
            </TabsContent>
        </Tabs>
    );
};
