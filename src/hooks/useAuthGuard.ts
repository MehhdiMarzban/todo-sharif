"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "@/stores/UserState";


/**
 * A custom hook that guards routes by checking if a user is logged in.
 * If the user is logged in, it redirects to the specified path.
 *
 * @param {string} redirectPath - The path to redirect to if the user is logged in. Defaults to "/".
 * @returns {Object} An object containing the current user and loading state.
 * @returns {Object.currentUser} The current user information.
 * @returns {boolean} loading - A flag indicating if the user authentication state is being loaded.
 */

const useAuthGuard = (redirectPath = "/") => {
    const router = useRouter();
    const { currentUser, loading, setLoading } = useUserStore();

    useEffect(() => {
        setLoading(false);
        if (currentUser) {
            //* stop loading and redirect to "/"
            router.replace(redirectPath);
        }
    }, [currentUser, router, redirectPath]);

    return { currentUser, loading };
};

export default useAuthGuard;
