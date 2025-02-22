"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useAppStore from "@/stores/AppState";
import { Sparkles } from "lucide-react";
import { toPersianDigits } from "number-persian";

/**
 * A component that displays a list of users in a grid layout.
 *
 * The component uses the `useAppStore` hook to retrieve the list of users.
 * It renders a grid of cards, each representing a user. The card shows the user's username,
 * their ID, and the number of tasks they have, represented by a badge.
 *
 * If there are no users, the component renders an empty state with a pulsing animation.
 *
 * @returns {JSX.Element} The rendered DashboardUsersPage component.
 */
const DashboardUsersPage: React.FC = () => {
    const { users } = useAppStore();

    const getBadgeVariant = (count: number) => {
        if (count === 0) return "secondary";
        if (count < 3) return "default";
        return "destructive";
    };

    return (
        <div className="space-y-4 w-full animate-in fade-in zoom-in">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {users.map((user) => (
                    <Card
                        key={user.id}
                        className="bg-background/90 backdrop-blur-lg border-secondary shadow transition-all hover:bg-secondary/50 overflow-hidden">
                        <CardHeader className="px-4">
                            <CardTitle className="text-lg flex items-center gap-3 justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center shadow-sm my-auto">
                                        <span className="font-bold text-primary text-lg">
                                            {user.username[0]}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-foreground/90 font-medium">
                                            {user.username}
                                        </p>
                                        <p className="text-sm text-muted-foreground/80 mt-1">
                                            شناسه: #{toPersianDigits(Number(user.id?.slice(0, 8)))}
                                        </p>
                                    </div>
                                </div>
                                <Badge
                                    variant={getBadgeVariant(user.todos.length)}
                                    className="text-sm px-4 py-2 rounded-xl shadow-sm">
                                    {toPersianDigits(user.todos.length)}
                                    <span className="mr-2">تسک</span>
                                </Badge>
                            </CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>

            {/* Empty State */}
            {users.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-muted-foreground">
                    <div className="h-24 w-24 bg-primary/10 rounded-2xl flex items-center justify-center shadow-lg">
                        <Sparkles className="h-12 w-12 text-primary animate-pulse" />
                    </div>
                    <p className="text-xl font-medium">کاربری یافت نشد!</p>
                </div>
            )}
        </div>
    );
};

export default DashboardUsersPage;
