import React, { Component } from "react";
import * as firebase from "firebase";

class Notes extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    this.db = firebase.database();

    this.listenForChange();
  }

  listenForChange = () => {
    this.db.ref("notes").on("child_added", snapshot => {
      let note = {
        id: snapshot.key,
        title: snapshot.val().title,
        description: snapshot.val().description
      };

      let notes = this.state.notes;
      notes.push(note);

      this.setState({ notes });
    });

    this.db.ref("notes").on("child_removed", snapshot => {
      const notes = this.state.notes.filter(n => n.id !== snapshot.key);

      this.setState({ notes });
    });
  };

  handleDeleteNote = id => {
    firebase
      .database()
      .ref("notes")
      .child(id)
      .remove();
  };

  // handleEditNote = notes => {
  //   firebase
  //     .database()
  //     .ref("notes")
  //     .update("notes");
  // };

  render() {
    return (
      <section className="note-wrapper mt-4">
        <h2 style={{ textAlign: "center" }}>Notes</h2>
        <div className="note-wrapper bg-light m-2">
          {this.state.notes.map(note => (
            <React.Fragment>
              <div className="note-title bg-dark p-2" key={note.id}>
                <h3>{note.title}</h3>
                <button
                  onClick={() => this.handleDeleteNote(note.id)}
                  className="btn btn-danger"
                  style={{ float: "right", marginTop: -41 }}
                >
                  Delete
                </button>
              </div>
              <div className="note-content p-2">
                <p>{note.description}</p>

                <button
                  style={{ float: "right", marginTop: -41 }}
                  className="btn btn-primary"
                >
                  Edit Note
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    );
  }
}

export default Notes;
