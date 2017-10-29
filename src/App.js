import React, { Component } from 'react';
import { Col, Modal } from 'react-bootstrap';
import './App.css';
import GodPicturesFetch from './GodPicturesFetch';
import GodNamesFetch from './GodNamesFetch';

/*Main file of the App and Parent to all other components*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGods: [],
      showGodModal: false,
      showNoGodModal: false
    };
    this.passNamesToRan = this.passNamesToRan.bind(this);
    this.closeGodModal = this.closeGodModal.bind(this);
    this.closeNoGodModal = this.closeNoGodModal.bind(this);
  }
  /*Method for pushing god names to GodsNamesFetch from GodsPicturesFetch*/
  passNamesToRan(push) {
    if (push.names.length > 0) {
      this.setState({
        selectedGods: push,
        showGodModal: true
      })
    } else {
      this.setState({
        showNoGodModal: true
      });
    }
  }
  /*Method for closing the Modal that shows the randomly selected god*/
  closeGodModal() {
    this.setState({
      showGodModal: false
    });
  }
  /*Method for closing the alert Modal for not having any gods selected*/
  closeNoGodModal() {
    this.setState({
      showNoGodModal: false
    });
  }
  render() {
    return (
      <div className="app">
        <Col className="no-padding" xs={12} md={12}>
          <GodPicturesFetch
            onClick={this.passNamesToRan}
          />
        </Col>
        <div className="mega-container">
          <Modal className="god-modal" show={this.state.showGodModal} onHide={this.closeGodModal}>
            <div className="close-modal">
              <i onClick={this.closeGodModal} className="material-icons">close</i>
            </div>
            <GodNamesFetch
              gods={this.state.selectedGods}
            />
          </Modal>
          <Modal className="same-name-modal" show={this.state.showNoGodModal} onHide={this.closeNoGodModal}>
            <div className="close-modal">
              <i onClick={this.closeNoGodModal} className="material-icons">close</i>
            </div>
            <div>
              <h4 className="modal-message">You should select at least one god.</h4>
            </div>
          </Modal>
        </div>
        <div className="footer">
          <p>
            Game content and materials are trademarks and copyrights of their respective publisher and its licensors. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default App;