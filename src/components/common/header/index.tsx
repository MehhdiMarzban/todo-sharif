import Link from "next/link";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 border-b bg-card">
            <nav className="container flex items-center justify-between gap-4 px-4 py-2">
                <Logo />
                <div className="flex items-center gap-4">
                    {/* <TodoModal />
            <UserProfile  /> */}
                    <Button asChild variant={"default"}>
                        <Link href={"/auth"}>ورود</Link>
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
