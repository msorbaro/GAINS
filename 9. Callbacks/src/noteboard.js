import React, {Component } from 'react';
import './App.css';
import Note from './note'

class Noteboard extends Component{
  constructor(props){
    super(props);
    this.state = {title: '', body: '', savedtitle: '', savedbody: '', error: false}
  }

  render () {
    var buttonFunction = () => {
      console.log("Title: " + this.state.title);
      console.log("Body: " + this.state.body);
      if(this.state.title==='' || this.state.body ===''){
        this.setState({error: true})
      }
      else{
        this.setState({ savedtitle: this.state.title, savedbody: this.state.body, title: '', body: '', error:false});
      }
    }

    var inputFunctionTitle = (event) => {
      this.setState({title:event.target.value});
    }

    var inputFunctionBody = (event) => {
      this.setState({body:event.target.value});
    }

    var deleteFromNoteboard = () => {
      this.setState({savedtitle: '', savedbody: ''})
    }

    var note = null
    if(this.state.savedtitle!=='' && this.state.savedbody!== '' && !this.state.error){
      note=   <Note title={this.state.savedtitle} body={this.state.savedbody} deleteNote={deleteFromNoteboard} />
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
        {note}

      </div>
    )
  }
}

export default Noteboard;
