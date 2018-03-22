import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';


class Topics extends Component{
  render(){
    return(
      <div className="container">
        <Header />
        <h1>Topics</h1>
            <h5>Please select a topic</h5>
          <ul>
            <li><Link to={'/topics/rendering'}> Rendering with React</Link></li>
            <li><Link to='/topics/components'> Components </Link></li>
            <li><Link to='/topics/props-v-state'> Props v. State </Link></li>
          </ul>
          <hr />

      </div>
    )
  }
}
export default Topics
