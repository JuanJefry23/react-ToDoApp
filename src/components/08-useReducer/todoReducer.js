//Este es nuestro "Reducer"

export const todoReducer = (state = [], action) => {
  switch (action?.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((todo) => todo.id !== action.payload);

    //Forma corta de hacer el toggle con un "return implícito y usando el ternario" (*)
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    //Si no se coincide con ningún "case" entonces retorna el state
    default:
      return state;
  }
};
