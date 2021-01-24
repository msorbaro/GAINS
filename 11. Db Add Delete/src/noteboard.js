import React, {Component } from 'react';
import './App.css';
import Note from './note'

import { getNotes, addNote, removeNote } from './datastore';

class Noteboard extends Component{
  constructor(props){
    super(props);
    this.state = {title: '', body: '', error: false, notes: [], id: 1}
  }

  componentDidMount(){
    getNotes(this.getAllNotes)
  }

  getAllNotes = (allNotes) =>{
    this.setState({notes: allNotes})
    console.log(allNotes)
  }

  render () {
    var buttonFunction = () => {
      if(this.state.title==='' || this.state.body ===''){
        this.setState({error: true})
      }
      else{
        var note = {
          title: this.state.title,
          body: this.state.body,
          id: this.state.id
        }

        addNote(note);
        this.setState({ title: '', body: '', error:false});
        getNotes(this.getAllNotes);
      }
    }

    var inputFunctionTitle = (event) => {
      this.setState({title:event.target.value});
    }

    var inputFunctionBody = (event) => {
      this.setState({body:event.target.value});
    }

    var deleteFromNoteboard = (id) => {
      removeNote(id);
      getNotes(this.getAllNotes)
    }

    var notes = null
    if(this.state.notes != null ){
      notes =Object.keys(this.state.notes).map((oneNote) => {
        return <Note
          title={this.state.notes[oneNote].title}
          body={this.state.notes[oneNote].body}
          deleteNote={deleteFromNoteboard}
          id={oneNote}/>
      })
    }

    var error = null;
    if(this.state.error){
      error = <p> You must fill out all the fields </p>
    }


    return (
      <div className="mainContainer">
        <div className="inputSystem">
          <button className="saveButton" onClick={buttonFunction}> Save </button>
          <div className="inputs">
            <input type="text" onChange={inputFunctionTitle} placeholder="Title Of Note" value={this.state.title}/>
            <input type="text" onChange={inputFunctionBody} placeholder="Body Of Note" value={this.state.body}/>
          </div>
        </div>
        {error}
        {notes}

      </div>
    )
  }
}

export default Noteboard;
