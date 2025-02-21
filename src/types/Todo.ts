import User from "./User";

export enum TodoState {
    none = "در انتظار",
    doing = "در حال انجام",
    done = "تکمیل شده",
}
export const todoStateValues = Object.values(TodoState); 
export default interface Todo {
    id: string;
    title : string;
    date: string;
    user: User;
    state: TodoState;
}