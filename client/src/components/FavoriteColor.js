import React, {useState} from "react";
export default function FavoriteColor () {
    const [color, setColor] = useState("red");

return (
    <>
    <h1>My favourite color is {color}!</h1>
    <button type = "button" onClick={() => setColor("blue")}>
        Blue
    </button>
    <button type = "button" onClick={() => setColor("Red")}>
        Red
    </button>
    </>
);
}