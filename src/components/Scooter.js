import { useState } from "react";

function Scooters(){
    
    const [Scooter , setScooter] = useState({
        color:"Red",
        Brand:"Honda",
        Model:"Activa 5G",
        Price:50000,
        year : 2020
    })
    
    return (
        <>
            <h1>My Scotter</h1>
            <p>Color : {Scooter.color}</p>
            <p>Brand : {Scooter.Brand}</p>
            <p>Model : {Scooter.Model}</p>
            <p>Price : {Scooter.Price}</p>
            <p>year : {Scooter.year}</p>
            <input id="color_state" type="text" placeholder="Enter the Color of the Scooty"/>
            <input id = "brand_state" type="text" placeholder="Enter the brand of the scooty">
            <button onClick={() => setScooter((previousState)=> {return {...previousState,color : document.getElementById("color_state").value}})}>click for change</button>
            <button onClick={()=> setScooter((previousState) => {return {...previousState,Brand : document.getElementById('brand_state').value}})}>click for change</button>
        </>
    )
}

export default Scooters;