import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import BtnComp from './Components/BtnBox/BtnComp';
import ChildComp from './Components/BtnBox/ChildComp';

class App extends Component {
  constructor(){
    super();
    this.state={
      clicked: false,
    }
    this.changeChildText=this.changeChildText.bind(this);
  }
  toggleBtn(){
    this.setState({
      clicked: !this.state.clicked
    })
  }
  changeChildText(){
    return this.state.clicked? 'First Statement' : 'Second statement';
  }
  render() {
    return (
      <div className="container">
        <hr />
        <ChildComp childProp={this.changeChildText()} />
        <BtnComp btnProp={this.toggleBtn.bind(this)}/>
      </div>
    )
  }
}

export default App;
