/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { Col, Row, Button, FormGroup, Label, Input, Container, CustomInput, FormFeedback } from 'reactstrap';
import { Form } from 'react-bootstrap';
import firebase from '../../firebase-example/Firebase';

const EditEmployee = (props) => {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState([]);

  useEffect(() => {
    getAllEmployees()
  }, [])

  const getAllEmployees = () => {
    const getData = firebase.firestore().collection('Employees').doc(props.match.params.id);
    getData.get().then((doc) => {
      if (doc.exists) {
        const record = doc.data();
        setState({
          id: doc.id,
          name: record.name,
          address: record.address,
          city: record.city,
          email: record.email,
          zipcode: record.zipcode,
          gender: record.gender
        });
      } else {
        console.log("No such document!");
      }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleUpdate = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    e.preventDefault();
    setValidated(true);

    firebase
      .firestore()
      .collection("Employees")
      .doc(state.id)
      .update({
        name: state.name,
        address: state.address,
        city: state.city,
        email: state.email,
        zipcode: state.zipcode,
        gender: state.gender
      })
      .then(() => {
        console.log("Update record successfully..")
        props.history.push("/emp-list");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <div>
        <Container><br />
          <h3>Edit Employees</h3><br />
          <Form onSubmit={handleUpdate} noValidate validated={validated}>
            <FormGroup>
              <Label>Employee Name</Label>
              <Input type="text" name="name" id="name" placeholder="employee name" value={state.name} onChange={handleChange} required />
              <FormFeedback>Please enter the name</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label >Address</Label>
              <Input type="textarea" name="address" id="address" placeholder="address" value={state.address} onChange={handleChange} required />
              <FormFeedback>Please enter the address</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label >Employee Email</Label>
              <Input type="email" name="email" id="email" placeholder="email" value={state.email} onChange={handleChange} required />
              <FormFeedback>Please enter the email address</FormFeedback>
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>City</Label>
                  <CustomInput type="select" id="city" name="city" value={state.city} onChange={handleChange} >
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
                  <Input type="text" name="zipcode" id="zipcode" value={state.zipcode} required onChange={handleChange} />
                  <FormFeedback>Please enter the zipCode</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label>Gender : &nbsp;</Label>
              <CustomInput type="radio" id="male" name="gender" label="Male" inline value="Male" checked={state.gender === "Male"} onChange={handleChange} />
              <CustomInput type="radio" id="female" name="gender" label="Female" inline value="Female" checked={state.gender === "Female"} onChange={handleChange} />
            </FormGroup>
            <Button color="primary" size="lg" active>Update</Button> &nbsp;
          <Button color="secondary" type="submit" size="lg" onClick={() => { props.history.push("/emp-list") }} active>Cancel</Button> &nbsp;
        </Form>
        </Container>
      </div>
    </div>
  )
}
export default withRouter(EditEmployee);
