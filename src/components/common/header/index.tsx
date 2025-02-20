"use client";
import Link from "next/link";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import useUserStore from "@/stores/UserState";
import UserProfile from "./UserProfile";
import useIsUserLoaded from "@/hooks/useIsUserLoaded";

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 border-b bg-card">
            <nav className="container flex items-center justify-between gap-4 px-4 py-2">
                <Logo />
                <div className="flex items-center gap-4">
                    {/* <TodoModal /> */}
                    <UserProfile />
                </div>
            </nav>
        </header>
    );
};

export default Header;
