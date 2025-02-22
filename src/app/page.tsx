import { LoadingIcon } from "@/components/common";
import { Todo } from "@/components/features";
import { Suspense } from "react";

export default function Home() {
    return (
        <div className="flex min-h-screen">
            <Suspense fallback={<LoadingIcon className="flex justify-center w-full fill-primary" />}>
                <Todo />
            </Suspense>
        </div>
    );
}
