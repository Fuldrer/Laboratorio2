import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'



class Home extends React.Component {
  
  render(){
    return(
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    );
  }
  /*return (
    <div className="Home">
    <label>Home</label>

    </div>
  );*/
}

export default Home;
