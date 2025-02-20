import { siteConfig } from "@/config/site";

const Footer : React.FC = () => {
    return (
        <footer className="bg-primary text-primary-foreground text-center py-1">
            <p>{siteConfig.authorText}</p>
        </footer>
    );
}

export default Footer;