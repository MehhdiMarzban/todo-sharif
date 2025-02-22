import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import DesktopMenu from "./DesktopMenu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Menubar: React.FC = () => {
    return (
        <>
            <MobileMenu />
            <DesktopMenu className="hidden md:block" />
        </>
    );
};

export default Menubar;
