import { INCREMENT, DECREMENT, RESET } from "../Constants/Counter.Constant";

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const DecrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const ResetCounter = () => {
  return {
    type: RESET,
  };
};

export { incrementCounter, DecrementCounter, ResetCounter };
