import axios from "axios";
import {
  GET_TODO_FAILED,
  GET_TODO_REQUEST,
  GET_TODO_SUCESS,
} from "../Constants/Todos.Contants";

const getAllTodos = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_TODO_REQUEST });
      const data = await axios.get("https://dummyjson.com/todos/");
      if (data) {
        dispatch({ type: GET_TODO_SUCESS, payload: data.data.todos });
      }
    } catch (error) {
      dispatch({ type: GET_TODO_FAILED, payload: error.message });
    }
  };
};

export { getAllTodos };
