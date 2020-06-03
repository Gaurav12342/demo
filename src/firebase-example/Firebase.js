import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'

// const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyDKgMVyiH_EeFLWTkcIYG7GL-3y4G3SgXI",
  authDomain: "student-1f7cd.firebaseapp.com",
  databaseURL: "https://student-1f7cd.firebaseio.com",
  projectId: "student-1f7cd",
  storageBucket: "student-1f7cd.appspot.com",
  messagingSenderId: "885875438926",
  appId: "1:885875438926:web:47c105381351bf220b9a1f",
  measurementId: "G-9DDYBHBK4F"
};
firebase.initializeApp(config);
// firebase.firestore().settings(settings);

export default firebase;