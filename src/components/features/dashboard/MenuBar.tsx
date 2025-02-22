import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

/**
 * The `Menubar` component is a functional React component that renders
 * both `MobileMenu` and `DesktopMenu` components. The `DesktopMenu` is
 * hidden on smaller screens and only displayed on medium and larger screens.
 *
 * @component
 * @example
 * return (
 *   <Menubar />
 * )
 */
const Menubar: React.FC = () => {
    return (
        <>
            <MobileMenu />
            <DesktopMenu className="hidden md:block" />
        </>
    );
};

export default Menubar;
