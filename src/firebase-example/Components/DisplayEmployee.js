/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Button, Container, Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import firebase from '../../firebase-example/Firebase';
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer, toast } from 'react-toastify';

const DisplayEmployee = (props) => {
  const [state, setState] = useState([]);
  const [data, setData] = useState([{ name: "", email: "", displayName: "", photoURL: "" }]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  console.log({ data });

  useEffect(() => {
    getCurrentUser();
    getAllEmployees();
  }, []);

  const getCurrentUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        user.providerData.forEach((profile) => {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
          setData({ name: profile.displayName, email: profile.email, displayName: profile.displayName, photoURL: profile.photoURL });
        })
      } else {
        console.log("failed get the current user");
      }
    });
  }

  const getAllEmployees = () => {
    const user = firebase.auth().currentUser;
    if (user != null) {
      firebase
        .firestore()
        .collection("Employees")
        .onSnapshot((snapshot) => {
          const items = snapshot && snapshot.docs && snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setState(items);
        })
    } else {
      alert("Please first login into the system.")
      props.history.push("/sign-in");
    }
  }

  const handleDelete = (id) => {
    firebase
      .firestore()
      .collection("Employees")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Delete record successfully.")
        toast.success("Delete Record Successfully.");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Record not deleted.");
      })
  }

  const userLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log("successfully user logout");
        props.history.push("/");
      }).catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {data.name != null ? data.name : data.email}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => { props.history.push("/change-pass") }}>
                    Change Password
                  </DropdownItem>

                  <DropdownItem onClick={() => { props.history.push("/emp-list/profile") }}>
                    Manage Profile
                  </DropdownItem>

                  <DropdownItem onClick={userLogout}>
                    LogOut
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>

        <h3>List Employees</h3><br />
        <Button color="success" onClick={() => { props.history.push("/emp-list/add-emp") }}>Add</Button>
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>City</th>
              <th>Address</th>
              <th>Email</th>
              <th>ZipCode</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {state && state.map((record, index) => {
              return (
                <tr key={record.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{record.name}</td>
                  <td>{record.city}</td>
                  <td>{record.address}</td>
                  <td>{record.email}</td>
                  <td>{record.zipcode}</td>
                  <td>{record.gender}</td>
                  <td>
                    <Button outline color="primary" onClick={() => { props.history.push(`/emp-list/edit-emp/${record.id}`) }}>Edit</Button>{' '}
                    <Button outline color="danger" onClick={() => {
                      confirmAlert({
                        title: 'Confirm to delete',
                        message: 'Are you sure to do this.',
                        buttons: [
                          {
                            label: 'Yes',
                            onClick: () => handleDelete(record.id)
                          },
                          {
                            label: 'No',
                            onClick: () => props.history.push("/emp-list")
                          }
                        ]
                      })
                    }}>Delete</Button>{' '}<ToastContainer />
                    {/*  handleDelete(record.id) */}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default withRouter(DisplayEmployee);