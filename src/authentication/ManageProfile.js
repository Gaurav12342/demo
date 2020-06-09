import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Form } from 'react-bootstrap';
import firebase from '../firebase-example/Firebase';

const ManageProfile = (props) => {
  const [validated, setValidated] = useState(false);
  const [data, setData] = useState([]);
  const [photoURL, setPhotoURL] = useState("");
  console.log(data, photoURL);
  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user != null) {
      user.providerData.forEach((profile) => {
        // console.log("Sign-in provider: " + profile.providerId);
        // console.log("  Provider-specific UID: " + profile.uid);
        // console.log("  Name: " + profile.displayName);
        // console.log("  Email: " + profile.email);
        // console.log("  Photo URL: " + profile.photoURL);
        setData(profile);
      })
    } else {
      console.log("Data not found.");
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const handleImage = (e) => {
    setPhotoURL(window.URL.createObjectURL(e.target.files[0]));
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    e.preventDefault();
    setValidated(false);

    firebase.auth().currentUser.updateProfile({
      displayName: data.displayName,
      photoURL: photoURL
      // photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      alert("Update profile successfully.");
      props.history.push("/emp-list");
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }

  return (
    <div>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <h3>Manage Profile</h3>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" id="email" disabled value={data.email ? data.email : ""} />
              </FormGroup>

              <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="displayName" id="displayName" onChange={handleChange} value={data.displayName ? data.displayName : ""} />
              </FormGroup>

              <FormGroup>
                <Label>photoURL</Label>
                <Input type="file" name="photoURL" id="photoURL" onChange={handleImage} />
                <img alt="..." style={{ width: "25%", height: "45%", position: "absolute" }} src={photoURL} /> <br />
              </FormGroup>
            </Col>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Button color="primary" >Update Profile</Button>{' '}
              <Button color="secondary" onClick={() => { props.history.push("/emp-list"); }} >Cancel</Button>{' '}</Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default withRouter(ManageProfile);