import React, { Component } from 'react';
import logo from './images/logo/smite-logo.png';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
var GodPicturesFetch = require('./GodPicturesFetch');
var GodPantheon = require('./GodPantheon');


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>Welcome to SMITE Randomizer</h2>
				<GodPicturesFetch />
			</div>
		</div>
    );
  }
}

export default App;
