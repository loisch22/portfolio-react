import * as firebase from 'firebase'; // imports all exports from firebase

const config = {
  apiKey: "AIzaSyADA-yX3JQq3HbWNAjRvMYqeWMiyFZ2yvY",
  authDomain: "portfolio-69306.firebaseapp.com",
  databaseURL: "https://portfolio-69306.firebaseio.com",
  projectId: "portfolio-69306",
  storageBucket: "portfolio-69306.appspot.com",
  messagingSenderId: "12081265279"
};

firebase.initializeApp(config); // initialize config object

// firebase.database().ref(`about/content`).push("Hello");
// firebase.database().ref(`about/content`).set("goodbye");

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
