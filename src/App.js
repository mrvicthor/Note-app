import React, { Component } from "react";
import Note from "./components/note";
import Notes from "./components/notes";
import * as firebase from "firebase";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Note />
        <Notes />
      </div>
    );
  }
}

export default App;
