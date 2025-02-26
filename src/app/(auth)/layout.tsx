import { Footer, Header } from "@/components/common";
import { AuthLayout } from "@/components/layouts";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <AuthLayout>
                <main className="container py-4">{children}</main>
            </AuthLayout>
            <Footer />
        </div>
    );
};

export default Layout;
