import React, { Component } from 'react';

class Count extends Component{
  render(){
    return(
      <div>
          <h1>Count: {this.props.ChildPropOne} </h1>

          <button value={this.props.valueOne} onClick={this.props.AddValue.bind(this, this.props.valueOne)} className="btn btn-success">Add {this.props.valueOne}</button>
          <button value={this.props.valueTwo} onClick={this.props.AddValue.bind(this, this.props.valueTwo)} className="btn btn-info"> Add {this.props.valueTwo} </button>
          <button value={this.props.valueThree} onClick={this.props.AddValue.bind(this, this.props.valueThree)} className="btn btn-danger"> Add {this.props.valueThree} </button>
      </div>
    )
  }
}
Count.defaultProps = {
  valueOne: 1,
  valueTwo: 5,
  valueThree: 10
}
export default Count;
