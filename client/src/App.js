import Title  from "./components/Title";
import Example from "./components/Example"
function App() {
  const cars = ['BMW', 'Audi', 'Porche']
  return (
  <>
    <Title name = "TODO App"/>
    <Example  Garage = {cars}/>



  </>
  );
}

export default App;
