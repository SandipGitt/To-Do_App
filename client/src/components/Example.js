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

export default function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal ) {
        return <MadeGoal/>;
    }
    return <MissedGoal/>;
    }

function MissedGoal() {
    return <h1>MISSED!</h1>;
}

function MadeGoal() {
    return <h1>Goal!</h1>;
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={false}/>);