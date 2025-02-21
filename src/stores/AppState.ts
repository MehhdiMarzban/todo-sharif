import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { User } from "@/types";
import { toast } from "sonner";

//* type definitions
export type UserState = {
    users: User[];
    currentUser?: User;
    loading: boolean;
};

export type UserActions = {
    signupUser: (user: User) => boolean;
    signinUser: (user: User) => boolean;
    logoutUser: () => void;
    removeUser: (id: string) => void;
    setLoading: (loading: boolean) => void;
};

export type UserStore = UserState & UserActions;

//* initial zustand
const useAppStore = create<UserStore>()(
    persist(
        (set) => ({
            loading: true,
            users: [],
            currentUser: undefined,
            setLoading: (loading: boolean) => set({ loading }),
            signupUser: (user: User) => {
                let isSuccess = false;
                set((state) => {
                    const isExist = state.users.find((u) => u.username === user.username);
                    if (isExist) {
                        toast.error("نام کاربری تکراری است");
                        return {};
                    } else {
                        toast.success("ثبت نام با موفقیت انجام شد");
                        isSuccess = true;
                        const newUser = { ...user, id: Date.now().toString() };
                        return {
                            users: [...state.users, newUser],
                            currentUser: user,
                        };
                    }
                });
                return isSuccess;
            },
            signinUser: (user: User) => {
                let isSuccess = false;
                set((state) => {
                    const currentUser = state.users.find(
                        (u) => u.username === user.username && u.password === user.password
                    );
                    if (currentUser) {
                        toast.success(`خوش اومدی ${currentUser.username}`);
                        isSuccess = true;
                        return {
                            currentUser,
                        };
                    } else {
                        toast.error("نام کاربری یا رمز عبور اشتباه است");
                        return {
                            currentUser: undefined,
                        };
                    }
                });
                return isSuccess;
            },
            removeUser: (id: string) =>
                set((state) => {
                    return {
                        users: state.users.filter((user) => user.id !== id),
                    };
                }),
            logoutUser: () =>
                set((state) => {
                    if (state.currentUser) {
                        toast.success(`خداحافظ ${state.currentUser.username}`);
                        return {
                            currentUser: undefined,
                        };
                    } else {
                        return {};
                    }
                }),
        }),
        {
            name: "sharif-user-storage", //* storage name
            storage: createJSONStorage(() => localStorage), //* save and read from local storage
            partialize: ({ users, currentUser }) => {
                return {
                    users,
                    currentUser,
                };
            },
        }
    )
);

export default useAppStore;
