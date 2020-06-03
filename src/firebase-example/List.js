import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../firebase-example/Firebase';
import { Table, Button, Container } from 'reactstrap';

const List = (props) => {
  const [items, setItems] = useState([]); //useState() hook, sets initial state to an empty array
  useEffect(() => {
    firebase
      .firestore() //access firestore
      .collection("id")
      .onSnapshot(snapshot => {
        const listItems = snapshot.docs.map(doc => (
          {
            id: doc.id,
            ...doc.data()
          }));
        setItems(listItems);
      }
      );
  }, [])

  const handleDelete = (id) => {
    console.log(id);
    firebase
      .firestore()
      .collection("id")
      .doc(id)
      .delete()
      .then((response) => {
        console.log("response", response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <Container>
        <Button color="primary" onClick={() => { props.history.push("/add-data") }}>Add</Button>{' '}
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.city}</td>
                  <td>
                    <Button outline color="danger" onClick={() => { handleDelete(item.id) }}>Delete</Button>{' '}
                    <Button outline color="success" onClick={() => { props.history.push(`/list/edit/${item.id}`) }}>Edit</Button>{' '}
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

export default withRouter(List);