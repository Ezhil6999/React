import { useEffect, useState } from "react";

function Timer(){
    const [count,setCount] = useState(0);

    // set timeout with in the use =effect is a wrong way we dont want to call a function multiple time which reduce the performance
    useEffect(()=>{
        console.log("Screen Rendered")
        // check_count()
        setTimeout( ()=>{
            setCount((previousState) => {return previousState+1})},1000)
    })

    // function check_count(){
    //     if(count>10){
    //         setCount(1)
    //     }
    // }
    function updateCount(){
        setCount((previousState) =>{return previousState+1  })
    }
    return (
        <>
        <h1>
            I have  been clicked {count} times
        </h1>
        <button onClick={updateCount}>Click me</button>
        </>
    )
}

export default Timer;