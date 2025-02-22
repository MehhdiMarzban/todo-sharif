import { Footer, Header } from "@/components/common";

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className="container py-4">{children}</main>
            <Footer />
        </div>
    );
};

export default AuthLayout;
