import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Button, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Form } from 'react-bootstrap';
import firebase from '../firebase-example/Firebase';

const SignUp = (props) => {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
    displayName: "",
    phoneNumber: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    e.preventDefault();
    setValidated(true);
    firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
      .than(() => {
        alert("User Create Successfully");
        props.history.push("/sign-in");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    // console.log(state);
  }

  return (
    <div>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <h3>Registration</h3>
              {/* <FormGroup>
                <Label>Display Name</Label>
                <Input type="text" name="displayName" id="displayName" value={state.displayName} onChange={handleChange} placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label>Phone Number</Label>
                <Input type="text" name="phoneNumber" id="phoneNumber" value={state.phoneNumber} onChange={handleChange} placeholder="with a placeholder" />
              </FormGroup> */}
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" id="exampleEmail" value={state.email} onChange={handleChange} placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input type="password" name="password" id="examplePassword" value={state.password} onChange={handleChange} placeholder="password placeholder" />
              </FormGroup>
              <Button color="primary">Sign Up</Button>{' '}
              <Button color="secondary">Cancel</Button> {' '}
              <center><p>Or <Link to="/sign-in">Sign In</Link> Using</p></center>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default withRouter(SignUp);