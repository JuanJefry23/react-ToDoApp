import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  //Creamos el evento para el "form" el cuál se ejecutará cuando den click/submit al botón "Agregar"
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validamos que no se envie campos vacíos:
    if (description.trim().length <= 1) {
      return;
    }

    //Creo un nuevo todo el cual agregaré mediante "action"
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    //Asi le pasamos nuestra acción a nuestro "todoReducer"
    handleAddTodo(newTodo);

    //Limpiamos el "input" una vez hayamos dado click en el botón "Agregar"
    reset();
  };
  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Aprender..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block btn-add"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
