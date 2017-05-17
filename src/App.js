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
      showModal: false
    };
    this.passNamesToRan = this.passNamesToRan.bind(this);
    this.close = this.close.bind(this);
  }
  passNamesToRan(push) {
      if (push.names.length > 0) {
        this.setState({
          selectedGods: push,
          showModal: true
        })
      } else {
        alert('You have selected no gods');
      }
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
              />
          </Col>
           <Modal show={this.state.showModal} onHide={this.close}>
            <GodNamesFetch
              gods={this.state.selectedGods}
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