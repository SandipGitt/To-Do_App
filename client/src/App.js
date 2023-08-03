import Title  from "./components/Title";
import Example from "./components/Example"
import FavouriteColor from "./components/FavoriteColor";
// import useFetch from "./hooks/useFetch";
import CustomHook from "./components/CustomHook";
import AddTodo from "./components/AddTodo";

function App() {
  const cars = ['BMW', 'Audi', 'Porche']
  return (
  <>
    <Title name = "TODO App"/>
    <Example  Garage = {cars}/>
    <useFetch />
    <CustomHook />
    <AddTodo />
    <FavouriteColor />
  </>
  );
}

export default App;
