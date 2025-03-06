import { ThemeToggler } from "..";
import { Logo } from "./Logo";
import UserProfile from "./UserProfile";

/**
 * The main header component.
 *
 * This component is a sticky header that appears at the top of the page. It
 * contains a logo and a user profile component.
 *
 * @returns The header component.
 */
const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 border-b bg-card/20 backdrop-blur-2xl">
            <nav className="container flex items-center justify-between gap-4 px-4 py-2">
                <Logo />
                <div className="flex items-center gap-1 md:gap-4">
                    <ThemeToggler />
                    <UserProfile />
                </div>
            </nav>
        </header>
    );
};

export default Header;
