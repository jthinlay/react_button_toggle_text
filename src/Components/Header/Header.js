import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const checkActive = (match, location)=> {
  console.log('checkActive');
  console.log(match,location);
  console.log('test');
  return true;
}

class Header extends Component{
  constructor() {
    super();
      this.state = {
      isOpen: false
      };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return(
      <div className="App">
        <NavLink to ='/' activeClassName ='active' isActive={checkActive}> Home</NavLink>
        <NavLink to='/main' activeClassName = "active" isActive={checkActive}> Main</NavLink>
        <NavLink to='/contact' activeClassName = "active"> Contact</NavLink>
        <NavLink to='/about' activeClassName = "active"> About</NavLink>
        <NavLink to='/topics' activeClassName = 'active'> Topic </NavLink>
      </div>
    )
  }
}
export default Header
