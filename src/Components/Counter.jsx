import React, {useState} from 'react';

const Counter = ()=> {
    const [count, setCount] = useState(0)
    function plus() {
        setCount(count+2)
    }
    function minus() {
        setCount(count-1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={plus}>+2</button>
            <button onClick={minus}>-1</button>
        </div>
    )
}
export {Counter}