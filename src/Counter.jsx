import { useState } from "react";

const Counter = ({jump}) => {

    const [counter, setCounter] = useState(0); //segundo parametro es una funcion que modifica el estado, set por convecion
    const add = () =>{
        setCounter(counter + jump);
    }

    const substract = () => {
        setCounter(counter - jump);
    }
    return (
        <div id="counter">
            <h1>{counter}</h1>
            <p>Counter</p>
            <div className="btn-func">
                <button onClick={add}>+</button> 
                <button onClick={substract}>-</button>
                <button onClick={() => { setCounter(0) }}>↺</button>   
            </div>
            
        </div>

    )
}

export default Counter;