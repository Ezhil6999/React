import { useState } from "react";

function List(){
    const [list, setList] = useState([]);
    const [count,setCount] = useState(1);

    function addItems(){
        const itemName = 'Items '+count;
        setList((previosState)=>{return [...previosState,itemName]})
        setCount((previosState) => {return previosState+1});
    }
    
    function removeItem(){
        setList((previosState)=>{return previosState.slice(0,-1)});
        setCount((previosState) => {return previosState-1})
    }

    function addData(){
        const itemName = document.getElementById('name').value+" "+document.getElementById('number').value
        setList((previosState)=>{return [...previosState,itemName]})
    }


    return (
        <>
        <h1>List</h1>
        
        <input id="name" type="text"  placeholder="Enter Item Name"/>
        <input id="number" type="text" placeholder="Enter Number"/>
        <button onClick={addData}>Add the data</button>
        <br></br>
        <button onClick={addItems}>addItems</button>
        <button onClick={removeItem}>removeItem</button>
        <ul>
            {
                list.map((item,index)=> {return <li key={index}>{item}</li>})
            }
        </ul>
        </>
    )
}


export default List;