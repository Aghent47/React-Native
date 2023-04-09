import { useCounter } from '../hooks/useCounter';

export const CounterConHook = () => {
    const { counter, acumular, reset } = useCounter(10);
    return (
        <>
            <h2>Contador cCon Hook: <small>{ counter }</small> </h2>
            <button className="btn btn-primary"
                onClick={() => acumular(1)}
            >+1</button>
            &nbsp;
            <button className="btn btn-primary"
               onClick={() => acumular(-1)}
            >-1</button>
            &nbsp;
            <button className="btn btn-primary" onClick={() =>
                reset()
            }
            >Reset</button>
        </>
    )
}
