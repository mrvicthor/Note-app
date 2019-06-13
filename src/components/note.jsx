import React, { Component } from "react";
import * as firebase from "firebase";

class Note extends Component {
  state = {
    title: "",
    description: ""
  };

  createNote = () => {
    if (this.state.title !== "" && this.state.description !== "") {
      firebase
        .database()
        .ref("notes")
        .push({
          title: this.state.title,
          description: this.state.description
        });
    }
  };

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Note App</h2>
        <div className="note-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              onChange={e => this.handleChange(e, "title")}
              value={this.state.title}
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter Title..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="note">Note</label>
            <textarea
              onChange={e => this.handleChange(e, "description")}
              value={this.state.description}
              type="text"
              className="form-control"
              id="note"
              placeholder="Tell Me Something..."
            />
          </div>
          <button onClick={this.createNote} className="btn btn-primary">
            Create Note
          </button>
        </div>
      </div>
    );
  }
}

export default Note;
