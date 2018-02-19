 import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import BtnComp from './Components/BtnBox/BtnComp';
import ChildComp from './Components/BtnBox/ChildComp';
import Count from './Components/Count/Count';

class App extends Component {
  constructor(){
    super();
    this.state={
      clicked: false,
        count: 0,
    }
    this.changeChildText=this.changeChildText.bind(this);
  }
  incrementCountValue=(i)=>{
    this.setState({
      count: this.state.count + i
    })
  }

  clearValue=()=>{
    this.setState({
      count: this.state.count * 0
    })
  }

  toggleBtn(){
    this.setState({
      clicked: !this.state.clicked
    })
  }

  changeChildText(){
    return(
    this.state.clicked? this.props.textOptionOne : this.props.textOptionTwo
    )
  }

  render() {
    return (
      <div className="container">
        <hr />
          <Count AddValue={this.incrementCountValue} ChildPropOne={this.state.count} CleanValue={this.clearValue}/>
        <hr />
        <ChildComp childProp={this.changeChildText()} />
        <BtnComp btnProp={this.toggleBtn.bind(this)}/>
      </div>
    )
  }
}

App.defaultProps = {
  textOptionOne: <h1>Now practic !!! </h1>,
  textOptionTwo: <h1>Welcome to React Practic Playground</h1>,
}
export default App;
