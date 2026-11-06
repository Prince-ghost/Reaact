import { useState} from "react"

const States = () => {
    const [count, setCount] = useState(0) //here couhnt is variable and setCount is function
    console.log("This is count : ",typeof(count)) //number
    console.log("THis is setCount : ",typeof(setCount)) //function

    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    return (
        <div>
            <h1>This States Components</h1>
            <div onClick = {handleIncrease}>+</div>
            <div>{count}</div>
            <div onClick = {handleDecrease}>-</div>
        </div>
    )
}

export default States