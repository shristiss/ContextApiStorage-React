import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} 
          {"   "}
          <button  onClick={() => dispatch(removeTodo(todo.id))}>x</button>
        </li>
      ))}
    </>
  );
}

export default Todo;
