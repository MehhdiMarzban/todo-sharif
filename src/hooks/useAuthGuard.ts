"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAppStore from "@/stores/AppState";

/**
 * Hook to check if the user is logged in. If the user is logged in, then
 * redirect to the specified path if the `redirect` option is true.
 * Otherwise, returns the current user and loading state.
 *
 * @param {boolean} redirect - If true, redirect to the specified path if the user is logged in. Defaults to false.
 * @param {string} redirectPath - The path to redirect to if the user is logged in. Defaults to "/".
 * @returns {{currentUser: User | null, loading: boolean}} - The current user and loading state.
 */
const useAuthGuard = (redirect = false, redirectPath = "/") => {
    const router = useRouter();
    const { currentUser, loading, setLoading } = useAppStore();

    useEffect(() => {
        setLoading(false);
        if (currentUser) {
            if (redirect) {
                //* stop loading and redirect to "/"
                router.replace(redirectPath);
            }
        }
    }, [currentUser, router, redirectPath]);

    return { currentUser, loading };
};

export default useAuthGuard;
