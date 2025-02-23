"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFoundPage: React.FC = () => {
    const router = useRouter();
    return (
        <div>
            <div className="my-32 space-y-4 text-center">
                <h1 className="text-center font-black text-2xl">صفحه پیدا نشد !</h1>
                <Button variant={"outline"} onClick={() => router.back()}>
                    بازگشت به صفحه قبل
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;
