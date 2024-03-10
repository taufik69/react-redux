import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { todosReducer } from "./Redux/Reducers/Todos.Reducers";
const store = createStore(todosReducer, applyMiddleware(thunk));
export { store };
