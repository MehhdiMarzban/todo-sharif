"use client";
import Link from "next/link";
import Image from "next/image";
import { useTransition } from "react";
import { LogOut } from "lucide-react";

import { LoadingIcon } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import useAppStore from "@/stores/AppState";
import useIsUserLoaded from "@/hooks/useIsUserLoaded";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * A button that displays the current user's profile picture and username.
 * If the user is not logged in, it displays a "ورود / ثبت نام" link instead.
 *
 * @returns A `Popover` component with a `PopoverTrigger` inside a `Link` component.
 * The `PopoverTrigger` contains an `Image` that displays the current user's
 * profile picture. The `PopoverContent` contains a paragraph with the username
 * and a separator, and a `Button` that logs the user out when clicked.
 */
const UserProfile: React.FC = () => {
    const [pending, mutate] = useTransition();

    const { currentUser, logoutUser } = useAppStore();
    const { loading } = useIsUserLoaded();

    if (loading) {
        return <Skeleton className="size-9 rounded-full" />;
    }

    if (!currentUser) {
        return (
            <Button asChild variant={"ghost"}>
                <Link href={"/auth"}>ورود / ثبت نام</Link>
            </Button>
        );
    }

    const handleLogout = () => {
        mutate(() => {
            logoutUser();
        });
    };
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Image
                    width={25}
                    height={25}
                    sizes="25px"
                    quality={100}
                    alt={currentUser.username}
                    src="/images/profile.png"
                    className="size-9 flex-shrink-0 rounded-full border bg-background shadow-sm cursor-pointer"
                />
            </PopoverTrigger>
            <PopoverContent className="flex w-48 flex-col gap-2 p-2" align={"end"}>
                <p className="font-semibold text-sm text-center">کاربر : {currentUser.username}</p>
                <Separator className="bg-border/40" />
                <Button
                    size={"sm"}
                    className="w-full focus-visible:ring-0"
                    disabled={pending}
                    onClick={handleLogout}
                    variant={"destructive"}>
                    {pending ? <LoadingIcon className="fill-destructive-foreground" /> : <LogOut />}
                    خروج
                </Button>
            </PopoverContent>
        </Popover>
    );
};

export default UserProfile;
