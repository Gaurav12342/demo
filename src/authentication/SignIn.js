import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Button, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Form } from 'react-bootstrap';
import firebase from '../firebase-example/Firebase';

const SignIn = (props) => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  const providerFacebook = new firebase.auth.FacebookAuthProvider();

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

  const handleLogin = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    e.preventDefault();
    setValidated(true);

    firebase.auth().signInWithEmailAndPassword(state.email, state.password)
      .then(() => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            console.log(displayName, email, photoURL, emailVerified, isAnonymous, uid, providerData);
            props.history.push("/emp-list");
          } else {
            firebase.auth().signOut().then(function () {
              setState({ email: "", password: "" });
              console.log("user successfully log out.");
            }).catch(function (error) {
              console.log(error);
            });
          }
        });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        console.log("state", state);
      });
  }

  const googleLogin = () => {
    firebase.auth().signInWithPopup(providerGoogle).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      props.history.push("/emp-list");
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(errorCode, errorMessage, email, credential);
    });
  }

  const facebookLogin = () => {
    firebase.auth().signInWithPopup(providerFacebook).then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log(token, user);
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(errorCode, email, errorMessage, credential);
    });
  }

  return (
    <div>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleLogin}>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <h3>Login</h3>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" id="exampleEmail" value={state.email} onChange={handleChange} placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input type="password" name="password" id="examplePassword" value={state.password} onChange={handleChange} placeholder="password placeholder" />
              </FormGroup>
              <Button color="primary" >Sign In</Button>{' '}
              <Button color="secondary" >Cancel</Button>{' '}
              <p>Or <Link to="/sign-up">Sign up</Link> Using</p>
              <p><Link to="/forgot-pass">Forgot</Link></p>
              <Button outline color="danger" onClick={googleLogin}>Login with Google</Button>{' '}
              <Button outline color="primary" onClick={facebookLogin} >Login with Facebook</Button>{' '}
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default withRouter(SignIn);