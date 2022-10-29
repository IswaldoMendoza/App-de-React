import { useEffect, useState } from "react"

const Effect = () => {
    const [title, setTitle] = useState('Primer Titulo')
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log('Cambio titulo');
    }, [])

    console.log('Se hace render');

    return (
        <div>
            <h1>{title}</h1>
            <h1>{count}</h1>
            <button onClick={() => setTitle('Cambio el titulo')}>Cambiar el titulo</button>
            <button onClick={() => setCount(count + 1)}>Sumar</button>
        </div>
    )
}

export default Effect