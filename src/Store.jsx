import { createStore } from "redux";
import { CounterReducer } from "./Redux/Reducers/Counter.Reducer";

const store = createStore(CounterReducer);
export { store };
