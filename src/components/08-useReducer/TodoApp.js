import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

import "./styles.css";

//La función "init" se llama y LO QUE SEA QUE RETORNE SERÁ EL "initialState"
const init = () => {
  //Obten los elementos de "localStorage", si devuelve null manda un arreglo vacío
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //Si los "todos" cambian significa que tengo que volver a grabar en el "LocalStorage"
  useEffect(() => {
    //Almacenamos los "todos" en el "LocalStorage"
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //------------------Eventos------------------
  const handleDelete = (todoId) => {
    const action = {
      type: "delete", //Especificandole la acción a mi "todoReducer"
      payload: todoId, //Mi "todoReducer" necesita el id del elemento al que se tiene que eliminar (método filter)
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  //---------------------Fin Eventos----------------------

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
