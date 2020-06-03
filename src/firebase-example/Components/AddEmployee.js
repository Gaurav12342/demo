import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row, Button, FormGroup, Label, Input, Container, CustomInput, FormFeedback } from 'reactstrap';
import { Form } from 'react-bootstrap';
import firebase from '../../firebase-example/Firebase';

const AddEmployee = (props) => {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    name: "",
    address: "",
    email: "",
    city: "",
    zipcode: "",
    gender: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleReset = () => {
    setState({
      name: "",
      address: "",
      email: "",
      city: "",
      zipcode: "",
      gender: ""
    })
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    e.preventDefault();
    console.log(state)

    firebase
      .firestore()
      .collection("Employees")
      .add({
        name: state.name,
        address: state.address,
        email: state.email,
        city: state.city,
        zipcode: state.zipcode,
        gender: state.gender
      })
      .then(() => {
        console.log("Data are stored successfully.");
        props.history.push("/emp-list");
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <Container><br />
        <h3>Add Employees</h3><br />
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <FormGroup>
            <Label>Employee Name</Label>
            <Input type="text" name="name" id="name" placeholder="employee name" required value={state.name} onChange={handleChange} />
            <FormFeedback>Please enter the name</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label >Address</Label>
            <Input type="textarea" name="address" id="address" placeholder="address" required value={state.address} onChange={handleChange} />
            <FormFeedback>Please enter the address</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label >Employee Email</Label>
            <Input type="email" name="email" id="email" placeholder="email" required value={state.email} onChange={handleChange} />
            <FormFeedback>Please enter the email address</FormFeedback>
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>City</Label>
                <CustomInput type="select" id="city" name="city" value={state.city} onChange={handleChange}>
                  <option value="">Select Country</option>
                  <option value="Surat">Surat</option>
                  <option value="Pune">Pune</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Brazil">Brazil</option>
                  <option value="America">America</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Employee Zip</Label>
                <FormFeedback>Please enter the zipCode</FormFeedback>
                <Input type="text" name="zipcode" id="zipcode" required value={state.zipcode} onChange={handleChange} />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label>Gender : &nbsp;</Label>
            <CustomInput type="radio" id="male" name="gender" label="Male" inline value="Male" onChange={handleChange} checked={state.gender === "Male"} />
            <CustomInput type="radio" id="female" name="gender" label="Female" inline value="Female" onChange={handleChange} checked={state.gender === "Female"} />
          </FormGroup>
          <Button color="primary" size="lg" active>Submit</Button> &nbsp;
          <Button color="info" size="lg" type="submit" onClick={handleReset} active>Reset</Button> &nbsp;
          <Button color="secondary" type="submit" onClick={() => { props.history.push("/emp-list") }} size="lg" active>Cancel</Button> &nbsp;
        </Form>
      </Container>
    </div>
  )
}

export default withRouter(AddEmployee);