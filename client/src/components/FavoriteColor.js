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
import {Form,Button } from 'react-bootstrap';
import {useState} from "react";

const Car = () => {
    const [userColor, setUserColor] = useState("White");
    const [car, setCar] = useState ({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red",
    });

const updateColor = (color) => {
    setCar((previousState) => {
        return {...previousState, color: color};
    });
};
return (
    <>
    <h1> My {car.brand}</h1>
    <h2>
        It is a {car.color} {car.model} from {car.year}
    </h2>
    <Form.Group className="mb-3" controlId="FavouriteColor">
        <Form.Label>Add your own color</Form.Label>
        <Form.Control
        type="text"
        placeholder="Place your color name"
        onChange={(e) => setUserColor(e.target.value)} />
        </Form.Group>
    <Button variant="primary" onClick = {() => updateColor(userColor)}
    >{userColor}</Button>
    </>
)
}
export default Car;