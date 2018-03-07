import React, { Component } from 'react';
import './App.css';

const API= 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_TITLE = 'N/A';
class App extends Component{
  constructor(){
    super();
    this.state={
      hits: [],
      isLoading: false,
      error: null
    }
  }
componentDidMount(){
  this.setState({
    isLoading: true
  })

  fetch(API)
  .then(response => {
    if(response.ok){
      return response.json()
    }else{
      throw Error('Something went wrong...')
    }
    })
  .then(data => this.setState({
    hits: data.hits,
    isLoading: false
    }))
  .catch(error => this.setState({
    error,
    isLoading: false
    }))
    }
  render(){
    const {hits, isLoading, error } = this.state

    if(error){
      return <p>{error.message}</p>
    }
    if(isLoading){
      return <p>Loading...</p>
    }
    return(
      <div className="container">
          {hits.map(data =>
              <ul key={data.objectID}>
                  <li>Title: <a href={data.title}>{data.title || DEFAULT_TITLE}</a></li>
                  <li>Author: {data.author}</li>
                  <li>Points: {data.points}</li>
              </ul>
          )}
      </div>
    )
  }
}
export default App
