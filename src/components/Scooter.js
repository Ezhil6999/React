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
            <button onClick={() => setScooter((previousState)=> {return {...previousState,color : document.getElementById("color_state").value}})}>click for change color</button>
            <br></br><br></br>
            <input id = "brand_state" type="text" placeholder="Enter the brand of the scooty"/>
            <button onClick={()=> setScooter((previousState) => {return {...previousState,Brand : document.getElementById('brand_state').value}})}>click for change brand</button>
            <br></br><br></br>
            <input id="brand_model" type="text" placeholder="Enter the model of the Scooty"/>
            <button onClick={()=> setScooter((previousState) => {return {...previousState,Model : document.getElementById('brand_model').value}})}>click to change model</button>
            <br></br><br></br>
            <input id="brand_price" type="text" placeholder="Enter the model of the Price"/>
            <button onClick={()=> setScooter((previousState) => {return {...previousState,Price : document.getElementById('brand_price').value}})}>click to change price</button>
            <br></br><br></br>
            <input id="brand_year" type="text" placeholder="Enter the model of the Scooty"/>
            <button onClick={()=> setScooter((previousState) => {return {...previousState,year : document.getElementById('brand_year').value}})}>click to change year</button>
            <br></br><br></br>
        </>
    )
}

export default Scooters;