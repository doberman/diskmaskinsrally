import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAF2PAA0nkoNthEy-Dr_hpf9IplX3pZ62A",
  authDomain: "diskmaskinsrally.firebaseapp.com",
  databaseURL: "https://diskmaskinsrally.firebaseio.com",
  projectId: "diskmaskinsrally",
  storageBucket: "diskmaskinsrally.appspot.com",
  messagingSenderId: "1029713196963"
};
firebase.initializeApp(config);

export default firebase;
