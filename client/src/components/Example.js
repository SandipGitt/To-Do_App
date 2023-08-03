//rfce

//Adding events to Component
// export default function Example() {
//     const shoot = (a) => {
//         alert(a);
//     };
//     return (
//     <>
//     <button onClick={() => shoot("Goal")}> Take the shot! </button>
//     </>
//     );
// }

// export default function Goal(props) {
//     const isGoal = props.isGoal;
//     if (isGoal ) {
//         return <MadeGoal/>;
//     }
//     return <MissedGoal/>;
//     }

// function MissedGoal() {
//     return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
//     return <h1>Goal!</h1>;
// }

// import React from 'react'

// // && logical Operator
// function Garage(props) {
//     const cars = props.cars;
//     return (
//     <>
//     <h1>Garage</h1>
//     {cars.length > 0 &&
//     <h2>
//         You have {cars.length} cars in your garage
//     </h2>
//     }
//     </>
//     )
// }

//Ternary operator
// export default function Goal(props) {
//     const isGoal = props.isGoal;
//         return (
//             <>
//             { isGoal ? <MadeGoal /> : <MissedGoal/>}
//             </>
//         )
//     }

// function MissedGoal() {
//     return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
//     return <h1>Goal!</h1>;
// }
// export default Garage

//React list
// export default function Garage() {
//     const cars = ['BMW', 'Audi', 'Porche'];
//     return (
//         <>
//         <h1>Who lives in my garage?</h1>
//         <ul>
//             {cars.map((car) => < Car brand = {car} />)}
//         </ul>
//         </>
//     );
// }

// function Car(props) {
//     return <li> I am a {props.brand }</li>;
// }

import {useEffect, useState} from "react";
import axios from "axios";

function Example() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await axios ("http://localhost:3000/api/v1/todos");
            console.log({data});
            setData(data.data);
        };
        fetchData();
    }, []);
    return (
    <div>{data && data.length > 0 && (
        <>
        <ul>
        {data.map((todo, index) => (
            <li key = {index}>{todo?.title}</li>
            ))}
        </ul>
        </>
    )}</div>
    );
}

export default Example;