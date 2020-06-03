import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Button, Container } from 'reactstrap';
import firebase from '../../firebase-example/Firebase';

const DisplayEmployee = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
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
  }, []);

  const handleDelete = (id) => {
    firebase
      .firestore()
      .collection("Employees")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Delete record successfully.")
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div>
      <Container>
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
                    <Button outline color="danger" onClick={() => { handleDelete(record.id) }}>Delete</Button>{' '}
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