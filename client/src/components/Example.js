//rfce

//Adding events to Component
export default function Example() {
    const shoot = (a) => {
        alert(a);
    };
    return (
    <>
    <button onClick={() => shoot("Goal")}> Take the shot! </button>
    </>
    );
}
