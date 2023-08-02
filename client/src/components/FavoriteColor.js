// import React, {useState} from "react";
// export default function FavoriteColor () {
//     const [color, setColor] = useState("red");

// return (
//     <>
//     <h1>My favourite color is {color}!</h1>
//     <button type = "button" onClick={() => setColor("blue")}>
//         Blue
//     </button>
//     <button type = "button" onClick={() => setColor("Red")}>
//         Red
//     </button>
//     </>
// );
// }
import { Button } from 'react-bootstrap';
import {useState} from "react";
const Car = () => {
    const [car, setCar] = useState ({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red",
    });

const updateColor = () => {
    setCar((previousState) => {
        return {...previousState, color: "yellow"};
    });
};
return (
    <>
    <h1> My {car.brand}</h1>
    <h2>
        It is a {car.color} {car.model} from {car.year}
    </h2>
    <Button variant="primary" onClick = {() => updateColor("yellow")}
    >yellow</Button>
    </>
)
}
export default Car;