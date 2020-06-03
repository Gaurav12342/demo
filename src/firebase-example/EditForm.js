import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Button, FormGroup, Label, Input, Container, FormFeedback } from 'reactstrap';
import { Form } from 'react-bootstrap';
import firebase from '../firebase-example/Firebase';

const EditForm = (props) => {
  const [validated, setValidated] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const ref = firebase.firestore().collection('id').doc(props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        console.log("ans", board);
        setItems({
          key: doc.id,
          name: board.name,
          city: board.city
        });
      } else {
        console.log("No such document!");
      }
    });
  }, [props.match.params.id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItems({ ...items, [name]: value });
  }

  const handleReset = () => {
    setItems({
      name: "",
      city: ""
    })
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
      .doc(items.key)
      .update({
        name: items.name,
        city: items.city
      })
      .then((response) => {
        console.log("response", response);
        props.history.push("/list");
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} noValidate validated={validated} >
        <Container>
          <FormGroup row>
            <Label sm={2}>Student Name</Label>
            <Col sm={10}>
              <Input type="text" name="name" id="name" placeholder="Name" value={items.name} onChange={handleChange} required />
              <FormFeedback>Please enter the name.</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Student City</Label>
            <Col sm={10}>
              <Input type="text" name="city" id="city" placeholder="City" value={items.city} onChange={handleChange} required />
              <FormFeedback>Please enter the city.</FormFeedback>
            </Col>
          </FormGroup>

          <Button color="primary" type="submit" size="lg" active>Update</Button>{' '}
          <Button color="secondary" type="submit" onClick={handleReset} size="lg" active >Reset</Button>
        </Container>
      </Form>
    </div>
  )
}

export default withRouter(EditForm);