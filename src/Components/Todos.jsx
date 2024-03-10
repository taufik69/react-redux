import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../Redux/Actions/Todos.Actions";

const Todos = () => {
  const dispatch = useDispatch();
  const { isLoaing, todos, error } = useSelector((state) => state);
  console.log(todos);
  const HandleClick = () => {
    dispatch(getAllTodos());
  };
  return (
    <div>
      <h2>{"todo App"}</h2>
      {isLoaing ? <h2>"isLoaing"</h2> : null}
      {error ? <h2>{error}</h2> : null}
      <button onClick={HandleClick}>Click me</button>
      {todos?.map((item) => {
        return <h1 key={item.id}>{item.todo}</h1>;
      })}
    </div>
  );
};

export default Todos;
