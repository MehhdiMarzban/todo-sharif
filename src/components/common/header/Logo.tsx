import { BadgeCheck } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export const Logo = () => (
    <Link href={"/"} className="flex items-center gap-1 text-lg font-bold text-primary">
        <BadgeCheck className="size-5 align-middle" strokeWidth={2} />
        {siteConfig.title}
    </Link>
);
