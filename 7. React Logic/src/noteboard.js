import React, {Component } from 'react';
import './App.css';

class Noteboard extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render () {
    var buttonFunction = () => {
      console.log("Saving");
    }

    var inputFunctionTitle = (event) => {
      console.log(event.target.value)
    }

    var inputFunctionBody = (event) => {
      console.log(event.target.value)
    }

    return (
      <div className="mainContainer">
        <div className="inputSystem">
          <button className="saveButton" onClick={buttonFunction}> Save </button>
          <div className="inputs">
            <input type="text" onChange={inputFunctionTitle} placeholder="Title Of Note"/>
            <input type="text" onChange={inputFunctionBody} placeholder="Body Of Note"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Noteboard;
