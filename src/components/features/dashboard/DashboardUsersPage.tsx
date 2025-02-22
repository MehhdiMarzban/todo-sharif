"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useAppStore from "@/stores/AppState";

export function UsersList() {
    const { users } = useAppStore();

    return (
        <div className="space-y-4 max-w-2xl w-full mx-auto animate-in fade-in zoom-in">
            {/* desktop */}
            <Card className="hidden md:block">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] text-right">شناسه</TableHead>
                            <TableHead className="text-right">نام کاربری</TableHead>
                            <TableHead className="text-right">تعداد تسک‌ها</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">
                                    #{user.id}
                                </TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell className="text-right">
                                    <Badge variant="outline" className="text-lg px-3 py-1">
                                        {user.todos.length}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            {/* mobiles */}
            <div className="md:hidden grid gap-4">
                {users.map((user) => (
                    <Card key={user.id}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{user.username}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-between items-center">
                            <div className="text-sm text-muted-foreground">
                                شناسه: #{user.id?.slice(0, 10)}
                            </div>
                            <Badge variant="outline" className="text-lg px-3 py-1">
                                {user.todos.length}
                            </Badge>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* empty */}
            {users.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">هیچ کاربری یافت نشد</div>
            )}
        </div>
    );
}
