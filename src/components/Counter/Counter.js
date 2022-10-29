import { useState } from "react";

const Counter = ({ children }) => {
const initial = 0
    const [count, setCount] = useState(initial)

    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(initial)
    }



    return (
        <div>
            {children}
            <h1> {count} </h1>
            <button onClick={decrement}>Restar</button>
            <button onClick={increment}>Sumar</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}

export default Counter