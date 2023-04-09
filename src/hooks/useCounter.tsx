import { useState } from 'react';

export const useCounter = (initialState:number = 0) => {
    const [counter, setCounter] = useState(initialState);

    const acumular = (numero: number) => {
        setCounter(counter + numero);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        acumular,
        reset
    }
}