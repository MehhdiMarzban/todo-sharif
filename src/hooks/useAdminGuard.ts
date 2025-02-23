"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAppStore from "@/stores/AppState";
import { siteConfig } from "@/config/site";

/**
 * This hook guards routes that require admin access. It checks if the current user
 * is an admin and redirects to the specified path if not. If the user is not logged in,
 * it redirects to the provided path as well.
 *
 * @param {string} redirectPath - The path to redirect to if the user is not an admin or not logged in.
 * Defaults to "/".
 *
 * @returns {{currentUser: User | null, loading: boolean}} - Returns the current user and loading state.
 */
const useAdminGuard = (redirectPath = "/") => {
    const router = useRouter();
    const { currentUser, loading, setLoading } = useAppStore();

    useEffect(() => {
        setLoading(false);
        if (currentUser) {
            if (currentUser.username === siteConfig.admin.username) {
            } else {
                //* stop loading and redirect to "/"
                router.replace(redirectPath);
            }
        } else if(!loading && !currentUser) {
            router.replace(redirectPath);
        }
    }, [currentUser, router, redirectPath, loading]);

    return { currentUser, loading };
};

export default useAdminGuard;
