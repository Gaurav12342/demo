import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, FormGroup, Label, Input, Container, Row, Col, FormFeedback } from 'reactstrap';
import { Form } from 'react-bootstrap';
import firebase from '../firebase-example/Firebase';


const ChangePassword = (props) => {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    oldPassword: "",
    newPassword: "",
    conPassword: ""
  });

  // useEffect(() => {
  // firebase.auth().onAuthStateChanged((user) => {
  // setData({ user });
  // if (user != null) {
  //   user.providerData.forEach((profile) => {
  //     // console.log("  Sign-in provider: " + profile.providerId);
  //     // console.log("  Provider-specific UID: " + profile.uid);
  //     // console.log("  Name: " + profile.displayName);
  //     // console.log("  Email: " + profile.email);
  //     // console.log("  Photo URL: " + profile.photoURL);
  //   })
  // } else {
  //   console.log("failed get the current user");
  // }
  // });

  // const user = firebase.auth().currentUser;
  // const newPassword = getASecureRandomPassword();

  // user.updatePassword(newPassword)
  //   .then(() => {
  //     // Update successful.
  //   }).catch((error) => {
  //     // An error happened.
  //   });
  // }, []);

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
    if (state.newPassword === state.conPassword) {
      const user = firebase.auth().currentUser;
      // var newPassword = firebase.auth().getASecureRandomPassword();

      user.updatePassword(state.newPassword).then(() => {
        alert("Successfully update password");
        props.history.push("/emp-list");
      }).catch((error) => {
        console.log(error);
      });
    }
    else {
      alert("New password and Confirm password not match.")
    }
  }
  return (
    <div>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit} >
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <h3>Change Password</h3>
              <FormGroup>
                <Label>Old Password</Label>
                <Input type="password" name="oldPassword" id="oldPassword" placeholder="Old Password" value={state.oldPass} onChange={handleChange} required />
                <FormFeedback>Please enter the old password</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>New Password</Label>
                <Input type="password" name="newPassword" id="newPassword" placeholder="New Password" value={state.newPass} onChange={handleChange} required />
                <FormFeedback>Please enter the new password</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Confirm Password</Label>
                <Input type="password" name="conPassword" id="conPassword" placeholder="Confirm Password" value={state.conPass} onChange={handleChange} required />
                <FormFeedback>Please enter the confirm password</FormFeedback>
              </FormGroup>

              <Button color="primary">Change Password</Button>{' '}
              <Button color="secondary" onClick={() => { props.history.push("/emp-list") }}>Cancel</Button> {' '}
              {/* <center><p>Or <Link to="/sign-in">Sign In</Link> Using</p></center> */}
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default withRouter(ChangePassword);