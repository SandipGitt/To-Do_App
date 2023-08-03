import Title  from "./components/Title";
//import Example from "./components/Example"
//import useFetch from "./hooks/useFetch";
//import CustomHook from "./components/CustomHook";
import AddTodo from "./components/AddTodo";
import { Col,Container, Row } from "react-bootstrap";
// import Todo from "./pages/Todo"

function App() {
  return (
  <>
    <Title name = "TODO App"/>
    <AddTodo />
    {/* <CustomHook /> */}
    <Container>
        <Row>
            <Col md={{span: 6, offset: 3}}>
              <Title name = ""/>
              <AddTodo label = "Add New Task" placeholder = "Eg: Do Homework" />
            </Col>
        </Row>
      </Container>
  </>
  );
}

export default App;
