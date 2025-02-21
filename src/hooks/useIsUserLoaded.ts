"use client";

import { useEffect } from "react";
import useUserStore from "@/stores/UserState";

/**
 * Hook to check if the user data is loaded.
 * It returns the current user and loading state.
 *
 * @returns {{currentUser: User | undefined, loading: boolean}}
 */
const useIsUserLoaded = () => {
    const { currentUser, loading, setLoading } = useUserStore();

    useEffect(() => {
        setLoading(false);
    }, [currentUser]);

    return { currentUser, loading };
};

export default useIsUserLoaded;