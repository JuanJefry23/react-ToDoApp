import React from "react";
import ReactDOM from "react-dom";
import { TodoApp } from "./components/08-useReducer/TodoApp";

//Obtengo el div donde se renderizará mi app React "ToDo App"
const divMostrar = document.getElementById("root");
ReactDOM.render(<TodoApp />, divMostrar);
