"use client";
import { Toaster } from "sonner";

const ToastProvider : React.FC = () => {
    return (
        <Toaster
            position="bottom-left"
            swipeDirections={["left"]}
            toastOptions={{
                style: {
                    background: "hsl(var(--background))",
                    color: "hsl(var(--foreground))",
                    border: "1px solid hsl(var(--border))",
                },
                classNames: {
                    toast: "shadow font-sans z-50 mb-6 select-none",
                    icon: "text-emerald-500",
                },
            }}
        />
    );
};

export default ToastProvider;