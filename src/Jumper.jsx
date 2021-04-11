import { useState } from "react";
import Counter from "./Counter";

const Jumper = () => {

    const [jump, setJump] = useState(0);
    return (
        <>
        <div id="jump">
            <h1>{jump}</h1>
            <p>Jump</p>
            <div className="btn-func">
                <button onClick={() => { setJump(jump+1)}}>+</button> 
                <button onClick={() => { setJump(jump-1)}}>-</button>
            </div>
            
        </div>
        <Counter jump={jump} />
        </>
    )

}

export default Jumper;