import Title  from "./components/Title";
//import Example from "./components/Example"
//import useFetch from "./hooks/useFetch";
//import CustomHook from "./components/CustomHook";
import AddTodo from "./components/AddTodo";
import { Col,Container, Row } from "react-bootstrap";
import Todo from "./pages/Todo";
import {API_SERVER} from "./constants";

function App() {
  return (
  <>
    <Container>
        <Row>
            <Col md={{span: 6, offset: 3}}>
              <Title name = "TODO App"/>
              <AddTodo label = "Add New Task" placeholder = "Eg: Do Homework"
              url = {`${API_SERVER}/todos`}
              />
              <Todo />
            </Col>
        </Row>
      </Container>
  </>
  );
}

export default App;
