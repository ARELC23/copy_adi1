//  import {useEffect, useState} from 'react'
// import {useState} from 'react'

// export default function Counter() {
//     const [counter, setCounter] = useState(0) //useState HOOK

//     function changeCount(value){
//        setCounter(counter + value)
//     }

//     // useEffect(() => {
//       // alert("This component got mounted")
//     // }, []) 
// // Square brackets are a 'blank dependency array', so this function only gets run once 
// //(each time counter is changed it will bring error without if with [] 
// //it will only do it once)
//   return (
//     <div className="bg-gray-700">
//         <button onClick={() => changeCount(1)}>+</button>
//         <span>{counter}</span>
//         <button onClick={() => changeCount(-1)}>-</button>
//     </div>
//   )
// }

// // Asked to use camalCase when specifying class, this is so we can remove
// // build/compile errors