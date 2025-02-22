import { Footer, Header } from "@/components/common";

const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div>
                <Header />
                <main className="container py-4">{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;
