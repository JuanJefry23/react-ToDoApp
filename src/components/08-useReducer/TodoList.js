import React from "react";
import { TodoListItem } from "./TodoListItem";

//Componente padre que le pasará props a su componente hijo "TodoListItem"
export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {todos.map((todo, i) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            i={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
};
