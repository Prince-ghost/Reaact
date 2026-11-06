// const Event = () => {
//     let count = 5
//     const handleInc = () => {
//         count++,
//         console.log(count);
//     }
//     const handleChange = (e) => {
//         console.log(e.target.value);
//     }

//     const handleDec = () => {
//         count--,
//         console.log(count);
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Submitted")
//     }
//     return(
//         <div>Events components
//         <h1 onClick={handleInc}>+</h1>
//         {count}
//         <input onChange={handleChange} className="input"/>
//         <h1 onClick={handleDec}>-</h1>
        
//         <form onSubmit={handleSubmit}>
//             <input onChange={handleChange} className="input"></input>
//             <button>Submit</button>
//         </form>


//         </div>
//     )
// }

// export default Event


import {useState} from "react"

import "./event.css"

const Event = () => {
    const [count, setCount] = useState(5)

    const handleInc = () => {
        setCount((currentCount) => currentCount + 1)
    }
    const handleDec = () => {
        setCount((currentCount) => currentCount - 1)
    }
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted")
    }

    return(
        <div>Event Components
            <div onClick={handleInc}>+</div>
            {count}
            <input onChange={handleChange} className="input" />
            <div onClick ={handleDec}>-</div>
            <form onSubmit={handleChange} className="input" />
            <button>Submit</button>
        </div>

    )

}
export default Event;
