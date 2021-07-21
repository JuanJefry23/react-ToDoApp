import { useState } from "react";

//Es un hook, por convención los nombres de los hooks empiezan con "use..."
export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialState);
  };

  //Cuando sea llamado el hook "useCounter" entonces retornara lo siguiente , el state y las funciones las cuales podrán ser utilizadas
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
