import User from "./User";

export default interface Todo {
    name : string;
    date: string;
    user: User;
    state: "none" | "doing" | "done";
}