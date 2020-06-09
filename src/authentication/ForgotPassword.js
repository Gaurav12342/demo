import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Form } from 'react-bootstrap';
import firebase from '../firebase-example/Firebase';

const ForgotPassword = (props) => {
  const [validated, setValidated] = useState(false);
  const [emailAdd, setEmailAdd] = useState("");

  const handleChange = (e) => {
    setEmailAdd(e.target.value);
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    e.preventDefault();
    setValidated(true);
    console.log(emailAdd);
    firebase.auth().sendPasswordResetEmail(emailAdd)
      .then(() => {
        firebase.auth().languageCode = 'de';
        alert("send on mail.");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <h3>Forgot Password</h3>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email" value={emailAdd} onChange={handleChange} required />
              </FormGroup>
              <Button color="primary">Get email</Button>{' '}
              <Button color="secondary" onClick={() => { props.history.push("/sign-in") }}>Cancel</Button> {' '}
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default withRouter(ForgotPassword);