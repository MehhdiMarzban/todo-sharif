import { Metadata } from "next";

import { Auth } from "@/components/features";

export const metadata : Metadata = {
    title: "احراز هویت",
}

export default () => {
    return <Auth />;
};
