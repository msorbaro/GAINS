import React, {Component } from 'react';

class Note extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render () {
    var onDelete = () => {
      this.props.deleteNote(this.props.id);
    }
    return (
      <div>
      <h4> I am the note Component </h4>
      <p> My title is {this.props.title} </p>
      <p> My body is {this.props.body} </p>
      <button onClick={onDelete}> Delete </button>
      </div>
    )
  }
}

export default Note;
