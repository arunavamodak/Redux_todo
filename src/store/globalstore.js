import { createStore } from "redux";
import { changeTodo } from "../reducers/actionWork";
export const createMystore = () => createStore(changeTodo);
