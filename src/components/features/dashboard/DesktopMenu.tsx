import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutDashboard, ListChecks, Settings, Users } from "lucide-react";
import Link from "next/link";

const DesktopMenu: React.FC<React.ComponentProps<"div">> = ({ className, ...rest }) => {
    return (
        <div
            className={cn(
                "min-h-screen w-full bg-gradient-to-b from-secondary/10 to-secondary/0 backdrop-blur-md",
                "border-l border-gray-200/30 dark:border-gray-800/50 shadow border-r",
                "p-6 space-y-8",
                className
            )}
            {...rest}>
            {/* Header Menu */}
            <div className="flex items-center gap-3 px-2">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    داشبورد
                </h1>
            </div>

            {/* Menu Items */}
            <nav className="space-y-4">
                <Link href="/dashboard">
                    <Button
                        variant="ghost"
                        className="w-full justify-start gap-3 px-4 py-6 hover:bg-accent/50 transition-all">
                        <LayoutDashboard className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">وضعیت‌ها</span>
                    </Button>
                </Link>

                <Link href="/dashboard/tasks">
                    <Button
                        variant="ghost"
                        className="w-full justify-start gap-3 px-4 py-6 hover:bg-accent/50 transition-all">
                        <ListChecks className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">تسک‌ها</span>
                    </Button>
                </Link>

                <Link href="/dashboard/users">
                    <Button
                        variant="ghost"
                        className="w-full justify-start gap-3 px-4 py-6 hover:bg-accent/50 transition-all">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">کاربران</span>
                    </Button>
                </Link>
            </nav>
        </div>
    );
};

export default DesktopMenu;
