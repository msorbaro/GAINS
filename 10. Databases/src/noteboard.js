import React, {Component } from 'react';
import './App.css';
import Note from './note'

class Noteboard extends Component{
  constructor(props){
    super(props);
    this.state = {title: '', body: '', error: false, notes: [], id: 1}
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
        var oldNotes = this.state.notes;
        oldNotes.push(note);
        console.log(oldNotes)
        this.setState({ title: '', body: '', error:false, notes: oldNotes, id: this.state.id +1 });
      }
    }

    var inputFunctionTitle = (event) => {
      this.setState({title:event.target.value});
    }

    var inputFunctionBody = (event) => {
      this.setState({body:event.target.value});
    }

    var deleteFromNoteboard = (id) => {
      var index = -1;
      for (var i = 0; i<this.state.notes.length; i++){
        if(this.state.notes[i].id === id){
          index = i;
        }
      }
      var oldNotes = this.state.notes;
      oldNotes.splice(index, 1);
      this.setState({notes:oldNotes})
    }

    var notes = null
    if(this.state.notes.length > 0 ){
      notes =this.state.notes.map((oneNote) => {
        return <Note title={oneNote.title} body={oneNote.body} deleteNote={deleteFromNoteboard} id={oneNote.id}/>
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
