import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Todo, User } from "@/types";
import { toast } from "sonner";
import { TodoFormType } from "@/validations/todo";

//* type definitions
export type UserState = {
    users: User[];
    todos: Todo[];
    currentUser?: User;
    loading: boolean;
};

export type UserActions = {
    signupUser: (user: User) => boolean;
    signinUser: (user: User) => boolean;
    logoutUser: () => void;
    removeUser: (id: string) => void;
    setLoading: (loading: boolean) => void;
    addTodo: (todo: TodoFormType, user: User) => void;
};

export type AppStore = UserState & UserActions;

//* initial zustand
const useAppStore = create<AppStore>()(
    persist(
        (set) => ({
            loading: true,
            users: [],
            todos: [],
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
                            currentUser: newUser,
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
            addTodo: (todo: TodoFormType, user: User) =>
                set((state) => {
                    if (state.currentUser && user) {
                        //* initial new todo
                        const date = todo.date.toISOString();
                        const newTodo: Todo = { ...todo, id: date, date, user: state.currentUser };

                        //* integrate new todo with currentUser and usersList
                        let previousUserTodos: Todo[] = [];
                        if (state.currentUser?.todos) {
                            previousUserTodos = [...state.currentUser.todos];
                        }
                        const userData = {
                            ...state.currentUser,
                            todos: [...previousUserTodos, newTodo],
                        };

                        const newUserList = state.users.map((u) => {
                            console.log(u.id, user.id);
                            if (u.id === state.currentUser?.id) {
                                return { ...userData };
                            } else {
                                return u;
                            }
                        })

                        toast.success("با موفقیت افزوده شد!");
                        return {
                            todos: [...state.todos, newTodo],
                            currentUser: { ...userData },
                            users: [...newUserList],
                        };
                    } else {
                        toast.error("لطفا وارد شوید !");
                        return {};
                    }
                }),
        }),
        {
            name: "sharif-user-storage", //* storage name
            storage: createJSONStorage(() => localStorage), //* save and read from local storage
            partialize: ({ users, currentUser, todos }) => {
                return {
                    users,
                    currentUser,
                    todos,
                };
            },
        }
    )
);

export default useAppStore;
