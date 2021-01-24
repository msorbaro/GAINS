import React, {Component } from 'react';

class Note extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div>
      <h4> I am the note Component </h4>
      <p> My title is {this.props.title} </p>
      <p> My body is {this.props.body} </p>
      </div>
    )
  }
}

export default Note;
