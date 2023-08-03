import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AddTodo(props) {
    const {label, placeholder} =props;
    return (
    <>
        <InputGroup className="mb-3">
        <InputGroup.Text >{label || "label"}</InputGroup.Text>
        <Form.Control placeholder = {placeholder || "placeholder"}/>
        <Button variant="primary" >Submit
        </Button>
    </InputGroup>
    </>
    )
}

export default AddTodo;