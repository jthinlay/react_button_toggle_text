import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Contact from './Components/Page/Contact';
import About from './Components/Page/About';
import Main from './Components/Page/Main';
import Topics from './Components/Page/Topics';
import { Link } from 'react-router-dom';

const First = (props) => {
  console.log(props);
  return(
    <div className="container">
      <Main />
    </div>
  )
}

const topic = ({match})=>(
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/main' component={First} />
      <Route path='/about' render={()=> <About />  }  />
      <Route path='/contact' render={()=> <Contact /> } />
      <Route path='/topics' render={()=> <Topics /> } />
      <Route exact path='/topics/:topicId' component={topic } />
    </div>

  </BrowserRouter>,

document.getElementById('root'));
