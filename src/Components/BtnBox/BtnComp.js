import React, { Component } from 'react';
class BtnComp extends Component{
  render(){
    return(
      <button onClick={this.props.btnProp} className="btn btn-info">Click Me</button>
    )
  }
}
export default BtnComp;
