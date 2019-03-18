import firebase from "firebase";
import "firebase/auth";
import app from "firebase/app";

var config = {
  apiKey: "AIzaSyAF2PAA0nkoNthEy-Dr_hpf9IplX3pZ62A",
  authDomain: "diskmaskinsrally.firebaseapp.com",
  databaseURL: "https://diskmaskinsrally.firebaseio.com",
  projectId: "diskmaskinsrally",
  storageBucket: "diskmaskinsrally.appspot.com",
  messagingSenderId: "1029713196963"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}
export default Firebase;
