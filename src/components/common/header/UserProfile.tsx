"use client";
import Image from "next/image";
import { useTransition } from "react";
import { LogOut, MailIcon } from "lucide-react";

import { LoadingIcon } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

interface UserProfileProps {
    username: string;
    logout: () => void;
}
const UserProfile: React.FC<UserProfileProps> = ({ username, logout }) => {
    const [pending, mutate] = useTransition();
    const handleLogout = () => {
        mutate(() => {
            logout();
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
                    alt={username}
                    src="/images/profile.png"
                    className="size-9 flex-shrink-0 rounded-full border bg-background shadow-sm cursor-pointer"
                />
            </PopoverTrigger>
            <PopoverContent className="flex w-48 flex-col gap-2 p-2" align={"end"}>
                <p className="font-semibold text-sm text-center">کاربر : {username}</p>
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