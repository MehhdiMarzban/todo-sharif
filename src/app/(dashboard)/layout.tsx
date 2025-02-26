import { Footer, Header } from "@/components/common";
import Menubar from "@/components/features/dashboard/MenuBar";
import { AdminLayout } from "@/components/layouts";

const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div>
                <Header />
                <AdminLayout>
                    <main className="grid grid-cols-12">
                        <aside className="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2">
                            <Menubar />
                        </aside>
                        <section className="col-span-12 md:col-span-8 lg:col-span-9 xl:col-span-10 p-4">
                            {children}
                        </section>
                    </main>
                </AdminLayout>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;
