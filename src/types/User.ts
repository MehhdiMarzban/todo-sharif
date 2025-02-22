import Todo from "./Todo";

export default interface User {
    id?: string;
    username: string;
    password: string;
    todos: Todo[];
}