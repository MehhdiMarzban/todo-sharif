import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { User } from "@/types";

//* type definitions
export type UserState = {
    users: User[];
    currentUser?: User;
    totalUsers: number;
};

export type UserActions = {
    signupUser: (user: User) => void;
    signinUser: (user: User) => void;
    logoutUser: () => void;
    removeUser: (id: string) => void;
};

export type UserStore = UserState & UserActions;

//* initial zustand
const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            users: [],
            currentUser: undefined,
            totalUsers: 0,
            signupUser: (user: User) =>
                set((state) => {
                    const isExist = state.users.find((u) => u.username === user.username);
                    if (isExist) {
                        return {};
                    } else {
                        const newUser = { ...user, id: Date.now().toString() };
                        return {
                            users: [...state.users, newUser],
                            currentUser: user,
                            totalUsers: state.users.length,
                        };
                    }
                }),
            signinUser: (user: User) =>
                set((state) => {
                    const currentUser = state.users.find(
                        (u) => u.username === user.username && u.password === user.password
                    );
                    if (currentUser) {
                        return {
                            currentUser,
                        };
                    } else {
                        return {
                            currentUser: undefined,
                        };
                    }
                }),
            removeUser: (id: string) =>
                set((state) => {
                    return {
                        users: state.users.filter((user) => user.id !== id),
                        totalUsers: state.users.length,
                    };
                }),
            logoutUser: () => set((state) => ({ currentUser: undefined })),
        }),
        {
            name: "sharif-user-storage", //* storage name
            storage: createJSONStorage(() => localStorage), //* save and read from local storage
        }
    )
);

export default useUserStore;
