import { Auth } from "@/components/features";
import { Metadata } from "next";
export const metadata : Metadata = {
    title: "احراز هویت",
}
export default () => {
    return <Auth />;
};
