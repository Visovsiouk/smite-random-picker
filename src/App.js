import React, { Component } from 'react';
import logo from './images/logo/smite-logo.png';
import './App.css';
import { Col } from 'react-bootstrap';
import GodPicturesFetch  from './GodPicturesFetch';
import GodNamesFetch from './GodNamesFetch';

class App extends Component {
  constructor(props) {
		super(props);
			this.state = { 
        selectedGods : []
			};
		this.passNamesToRan = this.passNamesToRan.bind(this);
	}
  passNamesToRan(push) {
    this.setState({
      selectedGods: push
    })
    console.log(push);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
			    <img src={logo} className="App-logo" alt="logo" />
			    <h2>Welcome to SMITE Randomizer</h2>
			  </div>
        <Col xs={12} md={7}>
				  <GodNamesFetch 
            gods={this.state.selectedGods}
          />
        </Col>
        <Col xs={12} md={5}>
				  <GodPicturesFetch
            onClick={this.passNamesToRan}
          />
        </Col>
        <div className="Footer">
          Game content and materials are trademarks and copyrights of their respective publisher and its licensors. All rights reserved.
        </div>
		</div>
    );
  }
}

export default App;