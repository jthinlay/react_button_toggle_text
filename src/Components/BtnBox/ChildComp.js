import React, { Component } from 'react';
class ChildComp extends Component{
  render(){
    return(
      <div>{ this.props.childProp}</div>
    )
  }
}
export default ChildComp;
