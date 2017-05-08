import React, { Component } from 'react';
import logo from './images/logo/smite-logo.png';
import './App.css';
import { Col } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import GodPicturesFetch from './GodPicturesFetch';
import GodNamesFetch from './GodNamesFetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGods: [],
      currentSelectedGod: null,
      showModal: false
    };
    this.passNamesToRan = this.passNamesToRan.bind(this);
    this.currentGod = this.currentGod.bind(this);
    this.close = this.close.bind(this);
  }
  passNamesToRan(push) {
    this.setState({
      selectedGods: push,
      showModal: true
    })
  }
  currentGod(currentGod) {
    this.setState({
      currentSelectedGod: currentGod
    })
  }
  close() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to SMITE Randomizer</h2>
        </div>
        <div className="Mega-container">
          <Col className="Gods-section" xs={12} md={12}>
            <GodPicturesFetch
              onClick={this.passNamesToRan}
              currentGod={this.state.currentSelectedGod}
              />
          </Col>
           <Modal show={this.state.showModal} onHide={this.close}>
            <GodNamesFetch
              gods={this.state.selectedGods}
              onLoad={this.currentGod}
            />
           </Modal>
        </div>
        <div className="Footer">
          <p>
            Game content and materials are trademarks and copyrights of their respective publisher and its licensors. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default App;