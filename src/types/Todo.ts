import User from "./User";

export const todoStateValues = ["در انتظار", "در حال انجام", "تکمیل شده"] as const;
export default interface Todo {
    id: string;
    title: string;
    date: string;
    user: User;
    state: (typeof todoStateValues)[number];
}