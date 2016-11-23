import React, { Component } from 'react';
import logo from './images/logo/smite-logo.png';
import './App.css';
import { Col } from 'react-bootstrap';

import GodPicturesFetch  from'./GodPicturesFetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
			    <img src={logo} className="App-logo" alt="logo" />
			    <h2>Welcome to SMITE Randomizer</h2>
			  </div>
        <Col xs={12} md={7}>
				  <div>test</div>
        </Col>
        <Col xs={12} md={5}>
				  <GodPicturesFetch/>
        </Col>
		</div>
    );
  }
}

export default App;