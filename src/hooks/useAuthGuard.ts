"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "@/stores/UserState";

/**
 * This hook is used to guard routes and redirect if the user is already logged in.
 * If the user is logged in, it will redirect to the given path.
 * @param {string} [redirectPath="/"] The path to redirect to if the user is logged in
 * @returns {boolean} Whether the user is logged in or not
 */
const useAuthGuard = (redirectPath = "/") => {
    const router = useRouter();
    const { currentUser, loading, setLoading } = useUserStore();

    useEffect(() => {
        if (currentUser) {
            //* stop loading and redirect to "/"
            setLoading(false);
            router.replace(redirectPath);
        }
    }, [currentUser, router, redirectPath]);

    return { currentUser, loading };
};

export default useAuthGuard;
