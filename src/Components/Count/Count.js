import React, { Component } from 'react';

class Count extends Component{
  render(){
    return(
      <div>
          <h1>Count: {this.props.ChildPropOne} </h1>

          <button onClick={this.props.AddValue.bind(this, this.props.valueOne)} className="btn btn-success">{this.props.text} {this.props.valueOne}</button>
          <button onClick={this.props.AddValue.bind(this, this.props.valueTwo)} className="btn btn-info"> {this.props.text} {this.props.valueTwo} </button>
          <button onClick={this.props.AddValue.bind(this, this.props.valueThree)} className="btn btn-danger"> {this.props.text} {this.props.valueThree} </button>
          <button onClick={this.props.CleanValue.bind(this, this.props.CleanValue)} className="btn btn-warning">{this.props.clean}</button>
      </div>
    )
  }
}
Count.defaultProps = {
  valueOne: 1,
  valueTwo: 50,
  valueThree: 100,
  text: 'Add',
  clean: 'Reset',
}
export default Count;
