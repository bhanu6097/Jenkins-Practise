import React from 'react';

export const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    const increement = () => {
        setCounter(counter + 1)
    }

    const decreement = () => {
        setCounter(counter - 1)
    }
    return(
        <div style={{ display: 'flex'}}>
        <button onClick={increement}>+</button>
        {counter}
        <button onClick={decreement}>-</button>
        </div>
    )
}