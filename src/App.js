import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
class App extends Component{
  update(){
    <App val={this.props.val + 1} result={this.props.val}/>
  }
  render(){
    return(
      <div className="container">
          <button onClick={this.update.bind(this)}  >
            {this.props.val} {this.props.result} 
          </button>
      </div>
    )
  }
}
App.defaultProps = {val: 0}

export default App
