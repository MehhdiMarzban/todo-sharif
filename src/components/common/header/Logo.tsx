import { BadgeCheck } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";

/**
 * A functional component that renders the application logo as a clickable link.
 * The logo consists of a badge icon and the site title text.
 * When clicked, it navigates to the home page.
 */
export const Logo = () => (
    <Link href={"/"} className="flex items-center gap-1 text-lg font-bold text-primary">
        <BadgeCheck className="size-5 align-middle" strokeWidth={2} />
        {siteConfig.title}
    </Link>
);
