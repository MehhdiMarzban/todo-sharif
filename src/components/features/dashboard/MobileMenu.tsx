import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import DesktopMenu from "./DesktopMenu";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";

const MobileMenu: React.FC = () => {
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild className="md:hidden mt-2 mr-1 z-50">
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                </Button>
            </DrawerTrigger>

            <DrawerContent className="h-full w-[65%] sm:w-[45%] mt-0 right-0 left-auto rounded-none">
                <DialogTitle></DialogTitle>
                <DesktopMenu className="w-full h-full border-none shadow-none" />
            </DrawerContent>
        </Drawer>
    );
};

export default MobileMenu;
