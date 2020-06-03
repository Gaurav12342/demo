import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Button, FormGroup, Label, Input, Container, FormFeedback } from 'reactstrap';
import { Form } from 'react-bootstrap';
import firebase from '../firebase-example/Firebase';

const AddForm = (props) => {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    "name": "",
    "city": ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value })
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    e.preventDefault();
    setValidated(true);

    firebase
      .firestore()
      .collection("id")
      .add({
        name: state.name,
        city: state.city
      })
      .then((response) => {
        console.log("response", response);
        props.history.push("/list");
      })
      .catch((error) => {
        console.log(error);
      })

    console.log("data", state);
  }

  const handleReset = (e) => {
    e.preventDefault();
    setState({
      name: "",
      city: ""
    })
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} noValidate validated={validated} >
        <Container>
          <FormGroup row>
            <Label sm={2}>Student Name</Label>
            <Col sm={10}>
              <Input type="text" name="name" id="name" placeholder="Name" value={state.name} onChange={handleChange} required />
              <FormFeedback>Please enter the name.</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Student City</Label>
            <Col sm={10}>
              <Input type="text" name="city" id="city" placeholder="City" value={state.city} onChange={handleChange} required />
              <FormFeedback>Please enter the city.</FormFeedback>
            </Col>
          </FormGroup>

          <Button color="primary" size="lg" active>Submit</Button>{' '}
          <Button color="secondary" size="lg" active onClick={handleReset}>Reset</Button>
        </Container>
      </Form>
    </div>
  )
}

export default withRouter(AddForm);