//rfce

//Adding events to Component
export default function Example() {
    const shoot = (a) => {
        alert("goal");
    };
    return (
    <>
    <button onClick={() => shoot("Goal")}> Take the shot! </button>
    </>
    );
}
