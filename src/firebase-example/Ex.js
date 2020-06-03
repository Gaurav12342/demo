import React from 'react';
import { withRouter } from 'react-router-dom';
// import firebase from '../firebase-example/Firebase';

const Ex = () => {
  // firebase
  //   .firestore()
  //   .collection("id")
  //   .add({
  //     name: "LogicWind",
  //     city: "Vesu",
  //   })
  //   .then(ref => {
  //     console.log("Added document with ID: ", ref.id)
  //   })

  return (
    <div>
      <h1>Firestore CRUD App </h1>
      <h2>Item List</h2>
      <h2>Add Item</h2>
    </div>
  )
}

export default withRouter(Ex);