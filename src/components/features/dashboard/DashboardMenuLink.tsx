"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardMenuLink: React.FC<
    React.PropsWithChildren<{ path: string; onClose?: () => void }>
> = ({ path, children, onClose }) => {
    const pathname = usePathname();
    return (
        <Button variant={"ghost"} asChild>
            <Link
                onClick={onClose}
                className={cn("block transition-all ease-out w-full", {
                    "bg-secondary text-secondary-foreground": pathname === path,
                })}
                href={path}>
                {children}
            </Link>
        </Button>
    );
};

export default DashboardMenuLink;
