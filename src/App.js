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
          txt: '',
    }
    this.changeChildText=this.changeChildText.bind(this);
  }
update=(e)=>{
  this.setState({
    txt: e.target.value
  })
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
    this.state.clicked? this.props.textOne : this.props.textTwo
    )
  }

  render() {
    return (
      <div className="container">

        {this.props.textOne}
        <hr />
        <input type="text" onChange={this.update.bind(this)} />
        <h3>{this.state.txt}</h3>
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
  textOne: <h1>Now practic !!! </h1>,
  textTwo: <h1>Welcome to React Practic Playground</h1>,
}
export default App;
