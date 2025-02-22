"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAppStore from "@/stores/AppState";

/**
 * This hook checks if the user is logged in and redirects to the specified path
 * if so. The hook returns an object with the `currentUser` and `loading` states.
 *
 * @param {boolean} redirect - If true, the user is redirected to the specified path.
 * @param {string} redirectPath - The path to redirect to. Defaults to "/".
 * @returns {{currentUser: User | null, loading: boolean}}
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
