import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerDescription, DrawerTrigger } from "@/components/ui/drawer";
import DesktopMenu from "./DesktopMenu";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

/**
 * `MobileMenu` is a React functional component that renders a mobile-friendly
 * navigation menu using a drawer that slides in from the right side of the screen.
 *
 * The component utilizes the following UI elements:
 * - `Drawer`: A container for the sliding drawer.
 * - `DrawerTrigger`: A button that triggers the opening of the drawer.
 * - `DrawerContent`: The content area of the drawer.
 * - `Button`: A button component used as the trigger for the drawer.
 * - `Menu`: An icon from the `lucide-react` library displayed inside the button.
 * - `DialogTitle`: A placeholder for the title of the dialog.
 * - `DesktopMenu`: A component that renders the menu items.
 *
 * The drawer is hidden on medium and larger screens (`md:hidden`) and is positioned
 * with a margin at the top and right (`mt-2 mr-2`). The drawer content takes up a
 * percentage of the screen width (`w-[65%] sm:w-[45%]`) and is styled to have no
 * rounded corners (`rounded-none`).
 *
 * @returns {JSX.Element} The rendered mobile menu component.
 */
const MobileMenu: React.FC<React.ComponentProps<"div">> = ({ className }) => {
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild className={cn("mt-2 mx-2 z-50", className)}>
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                </Button>
            </DrawerTrigger>

            <DrawerContent className="h-full w-[65%] sm:w-[45%] mt-0 right-0 left-auto rounded-none">
                {/* //* to prevent warnings */}
                <DialogTitle></DialogTitle>
                <DrawerDescription></DrawerDescription>
                <DesktopMenu className="w-full h-full border-none shadow-none" />
            </DrawerContent>
        </Drawer>
    );
};

export default MobileMenu;
