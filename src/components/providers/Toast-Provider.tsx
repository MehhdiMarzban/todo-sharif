"use client";
import { Toaster } from "sonner";

/**
 * Provides a context for displaying toast notifications
 * across the entire application.
 *
 * This component wraps the `Toaster` component from `sonner` and
 * customizes its styles to match the application's design.
 *
 * The `Toaster` component is a context provider that wraps your app
 * and provides a way to display toast notifications from anywhere
 * in your app.
 *
 * @returns The `Toaster` component
 */
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