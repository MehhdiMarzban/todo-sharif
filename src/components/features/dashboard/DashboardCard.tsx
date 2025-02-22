import { Card } from "@/components/ui/card";

interface DashboardCardProps {
    title: string;
    count: number;
    Icon: React.FC<React.ComponentProps<"svg">>;
}

/**
 * Props for the DashboardCard component.
 *
 * @interface DashboardCardProps
 * @property {string} title - The title to be displayed on the card.
 * @property {number} count - The count to be displayed on the card.
 * @property {React.FC<React.ComponentProps<"svg">>} Icon - The icon component to be displayed on the card.
 */

/**
 * A card component for displaying dashboard information.
 *
 * @component
 * @param {DashboardCardProps} props - The props for the DashboardCard component.
 * @returns {JSX.Element} The rendered DashboardCard component.
 */
const DashboardCard: React.FC<DashboardCardProps> = ({ title, count, Icon }) => {
    return (
        <Card className="relative overflow-hidden bg-background/80 transition-all backdrop-blur-md border border-gray-200/30 dark:border-gray-800/50 group animate-in zoom-in fade-in">
            <div className="p-6 group-hover:bg-secondary/45">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold">{title}</h3>
                </div>
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {count}
                </p>
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-primary/10 blur-xl" />
            </div>
        </Card>
    );
};

export default DashboardCard;
