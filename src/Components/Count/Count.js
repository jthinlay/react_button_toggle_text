import React, { Component } from 'react';

class Count extends Component{
  render(){
    return(
      <div>
          <h1>Count: {this.props.ChildPropOne} </h1>

          <button value={this.props.valueOne} onClick={this.props.AddValue.bind(this, this.props.valueOne)} className="btn btn-success">{this.props.text} {this.props.valueOne}</button>
          <button value={this.props.valueTwo} onClick={this.props.AddValue.bind(this, this.props.valueTwo)} className="btn btn-info"> {this.props.text} {this.props.valueTwo} </button>
          <button value={this.props.valueThree} onClick={this.props.AddValue.bind(this, this.props.valueThree)} className="btn btn-danger"> {this.props.text} {this.props.valueThree} </button>
          <button value={this.props.clean} onClick={this.props.CleanValue.bind(this, this.props.CleanValue)} className="btn btn-warning">{this.props.clean}</button>
      </div>
    )
  }
}
Count.defaultProps = {
  valueOne: 1,
  valueTwo: 5,
  valueThree: 10,
  text: 'Add',
  clean: 'Reset',
}
export default Count;
