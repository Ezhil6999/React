import { useState } from "react";
import CarClass from "./Car_Class";
import Scooters from "./Scooter";

function FavoriteColor(){
    const [color, setColor] = useState('Red')

    return (
        <>
        <h1>My favorite color is {color}</h1>
        <button onClick={()=>color==='Red'?setColor('Blue'):setColor('Red')}>change color</button>
        <CarClass/>
        <Scooters/>
        </>
    )
}

export default FavoriteColor;