import { INCREMENT, DECREMENT, RESET } from "../Constants/Counter.Constant";

const initailCounter = {
  count: 0,
};

const CounterReducer = (state = initailCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: (state.count = 0),
      };
    default:
      return state;
  }
};

export { CounterReducer };
