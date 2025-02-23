import { Metadata } from "next";
import { DashboardStatesPage } from "@/components/features/dashboard";

export const metadata : Metadata = {
    title: "داشبورد ",
}

export default () => {
    return <DashboardStatesPage />;
};
