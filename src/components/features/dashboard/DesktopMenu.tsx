import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutDashboard, ListChecks, Users } from "lucide-react";
import DashboardMenuLink from "./DashboardMenuLink";

/**
 * A React functional component that renders a desktop menu for a dashboard.
 * The menu includes a header and several navigation items.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - The props for the component.
 * @param {string} [props.className] - Additional class names to apply to the root div.
 * @param {React.HTMLAttributes<HTMLDivElement>} rest - Additional props to spread onto the root div.
 *
 * @returns {JSX.Element} The rendered desktop menu component.
 *
 * @example
 * <DesktopMenu className="custom-class" />
 *
 * @remarks
 * This component uses Tailwind CSS for styling and includes navigation links to different sections of the dashboard.
 */
const DesktopMenu: React.FC<React.ComponentProps<"div"> & { onClose?: () => void }> = ({
    className,
    onClose,
    ...rest
}) => {
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
                <DashboardMenuLink path="/dashboard" onClose={onClose}>
                    <LayoutDashboard className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">وضعیت‌ها</span>
                </DashboardMenuLink>

                <DashboardMenuLink path="/dashboard/tasks" onClose={onClose}>
                    <ListChecks className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">تسک‌ها</span>
                </DashboardMenuLink>

                <DashboardMenuLink path="/dashboard/users" onClose={onClose}>
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">کاربران</span>
                </DashboardMenuLink>
            </nav>
        </div>
    );
};

export default DesktopMenu;
