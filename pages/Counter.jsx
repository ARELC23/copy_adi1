import {useState} from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0) //useState HOOK

    function changeCount(value){
       setCounter(counter + value)
    }

    return (
        <div className="bg-gray-700">
            <button onClick={() => changeCount(1)}>+</button>
            <span>{counter}</span>
            <button onClick={() => changeCount(-1)}>-</button>
        </div>
    )
}