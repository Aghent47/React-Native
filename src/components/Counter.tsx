import React from 'react';

export const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    return (
        <>
            <h2>Contador: <small>{ counter }</small> </h2>
            <button className="btn btn-primary"
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >+1</button>
            &nbsp;
            <button className="btn btn-primary"
                onClick={() => {
                    setCounter(counter - 1);
                }}
            >-1</button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => {
                setCounter(0);
            }}
            >Reset</button>
        </>
    )
}
