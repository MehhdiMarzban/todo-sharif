"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAppStore from "@/stores/AppState";
import { siteConfig } from "@/config/site";

/**
 * This hook checks if the user is logged in and redirects to the specified path
 * if so. The hook returns an object with the `currentUser` and `loading` states.
 *
 * @param {boolean} redirect - If true, the user is redirected to the specified path.
 * @param {string} redirectPath - The path to redirect to. Defaults to "/".
 * @param {boolean} haveAdminAccess - Just admin can access to this page.
 *
 * @returns {{currentUser: User | null, loading: boolean}}
 */
const useAuthGuard = (redirect = false, redirectPath = "/", haveAdminAccess = false) => {
    const router = useRouter();
    const { currentUser, loading, setLoading } = useAppStore();

    useEffect(() => {
        setLoading(false);
        if (currentUser) {
            if (redirect) {
                if (haveAdminAccess && currentUser.username === siteConfig.admin.username) {
                } else {
                    //* stop loading and redirect to "/"
                    router.replace(redirectPath);
                }
            }
        } else if (haveAdminAccess) {
            router.replace(redirectPath);
        }
    }, [currentUser, router, redirectPath]);

    return { currentUser, loading };
};

export default useAuthGuard;
