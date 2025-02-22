import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

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
    addTodo: (todo: TodoFormType) => void;
    deleteTodo: (todo: Todo) => void;
    updateTodo: (todo: Todo) => void;
};

export type AppStore = UserState & UserActions;

//* initial zustand
const useAppStore = create<AppStore>()(
    persist(
        immer((set) => ({
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
            addTodo: (todo: TodoFormType) =>
                set((state) => {
                    if (state.currentUser) {
                        //* check number of todos <= 10
                        if (state.currentUser.todos && state.currentUser.todos?.length > 9) {
                            toast.warning("به دلیل محدودیت حافظه تنها 10 تسک میتوان اضافه کرد !");
                            return {};
                        }

                        //* initial new todo
                        const date = todo.date.toISOString();
                        const newTodo: Todo = { ...todo, id: date, date, user: state.currentUser };

                        let previousUserTodos: Todo[] = [];
                        if (state.currentUser?.todos) {
                            previousUserTodos = [...state.currentUser.todos];
                        }

                        const userData = {
                            ...state.currentUser,
                            todos: [...previousUserTodos, newTodo],
                        };

                        //* update todos
                        state.todos.push(newTodo);

                        //* update current user
                        state.currentUser = userData;

                        //* update users list
                        state.users = state.users.map((u) => {
                            if (u.id === state.currentUser?.id) {
                                return userData;
                            } else {
                                return u;
                            }
                        });
                        toast.success("با موفقیت افزوده شد!");
                    } else {
                        toast.error("لطفا وارد شوید !");
                    }
                }),
            deleteTodo: (todo) =>
                set((state) => {
                    state.todos = state.todos.filter((t) => t.id !== todo.id);
                    if (state.currentUser && state.currentUser.todos) {
                        state.currentUser.todos = state.currentUser?.todos?.filter(
                            (t) => t.id !== todo.id
                        );
                        //* update users
                        const findUserIndex = state.users.findIndex(
                            (user) => user.id === todo.user.id
                        );
                        state.users[findUserIndex].todos = state.currentUser?.todos;
                    }

                    toast.success("با موفقیت حذف شد !");
                }),
            updateTodo: (todo) =>
                set((state) => {
                    //* update todos
                    state.todos = state.todos.map((t) => {
                        if (t.id === todo.id) {
                            return todo;
                        } else {
                            return t;
                        }
                    });

                    //* update currentUser
                    if (state.currentUser && state.currentUser.todos) {
                        state.currentUser.todos = state.currentUser?.todos?.map((t) => {
                            if (t.id === todo.id) {
                                return todo;
                            } else {
                                return t;
                            }
                        });
                        //* update users
                        const findUserIndex = state.users.findIndex(
                            (user) => user.id === todo.user.id
                        );
                        state.users[findUserIndex].todos = state.currentUser?.todos;
                    }
                    toast.success("با موفقیت بروز شد !");

                }),
        })),
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
