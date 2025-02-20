import { siteConfig } from "@/config/site";

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-primary-foreground text-center py-1">
            <div className="flex flex-row items-center justify-center gap-1">
                <span>{siteConfig.authorText}</span>
                <span className="font-bold">{new Date().getFullYear()}</span>
            </div>
        </footer>
    );
};

export default Footer;
