import firebase from "firebase";
import "firebase/firestore";

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

app.initializeApp(config);

export const auth = app.auth();

export const firestore = firebase.firestore();

export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () => auth.signOut();

export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);

export const doSendEmailVerification = email => {
  auth.sendPasswordResetEmail(email);
};
