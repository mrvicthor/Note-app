import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApwcj2Ax5KGckh1m-XkPW55aSMxMpRTOA",
  authDomain: "note-app-2e4e6.firebaseapp.com",
  databaseURL: "https://note-app-2e4e6.firebaseio.com",
  projectId: "note-app-2e4e6",
  storageBucket: "note-app-2e4e6.appspot.com",
  messagingSenderId: "449508084165",
  appId: "1:449508084165:web:15fbf7982939bd2f"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
