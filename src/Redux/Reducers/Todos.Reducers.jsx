import {
  GET_TODO_FAILED,
  GET_TODO_REQUEST,
  GET_TODO_SUCESS,
} from "../Constants/Todos.Contants";

// make initail state
const initailState = {
  isLoaing: false,
  todos: [],
  error: null,
};

// make a reducer function

const todosReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST: {
      return {
        isLoaing: true,
      };
    }
    case GET_TODO_SUCESS: {
      return {
        isLoaing: false,
        todos: action.payload,
      };
    }

    case GET_TODO_FAILED: {
      return {
        isLoaing: false,
        todos: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export { todosReducer };
