import { Metadata } from "next";

import Dashboard from "@/components/features/dashboard";

export const metadata : Metadata = {
    title: "داشبورد ",
}

export default () => {
    return <Dashboard />;
};
