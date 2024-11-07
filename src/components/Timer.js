import { useEffect, useState } from "react";

function Timer(){
    const [count,setCount] = useState(0);
    useEffect(()=>{ 

        console.log("Screen Rendered --> used to get important information at the intial stage while loading")
        
        setTimeout(()=>{
            if (count>10){
                value_change()
            }
        },1000)
    },[count],)

    function value_change(){
        setCount(1)
    }
    function update_count(){
        setCount((previousState)=>{return previousState+1})
    }
    return (<>
    <h1>I have rendered {count} times</h1>
    <button onClick={ update_count}>increase count</button>
    </>)
}

export default Timer;