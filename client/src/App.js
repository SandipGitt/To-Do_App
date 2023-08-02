import Title  from "./components/Title";
import Example from "./components/Example"
import FavouriteColor from "./components/FavoriteColor";
function App() {
  const cars = ['BMW', 'Audi', 'Porche']
  return (
  <>
    <Title name = "TODO App"/>
    <Example  Garage = {cars}/>
    <FavouriteColor />



  </>
  );
}

export default App;
