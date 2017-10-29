import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';

/*Function for reseting the select to its first entry*/
function resetProfileForm() {
	document.getElementById("change-profile").selectedIndex = 0;
}

/*"Profile" component*/
class GodProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			profileName: '',
			existingProfiles: [],
			currentSelectedProfile: '',
			sameNameVisible: false,
			wrongNameVisible: false
		};
		this.profilesHaveChanged = this.profilesHaveChanged.bind(this);
		this.profileChange = this.profileChange.bind(this);
		this.profileHandleClick = this.profileHandleClick.bind(this);
		this.profileDeleteClick = this.profileDeleteClick.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.closeSameNameVisible = this.closeSameNameVisible.bind(this);
		this.saveSameNameVisible = this.saveSameNameVisible.bind(this);
		this.closeWrongNameVisible = this.closeWrongNameVisible.bind(this);
	}
	componentDidMount() {
		/*Run the profilesHaveChanged method on start*/
		this.profilesHaveChanged();
	}
	/*Method for handling changes made to <select> element*/
	profilesHaveChanged() {
		var currentExistingProfiles = [];
		/*Check if any profiles exist in the localstorage and populate the <select> element*/
		for (var profile in localStorage) {
			if (profile !== 'gods@app' && profile !== 'extermination@app' && profile !== 'pantheon@app' && profile !== 'godclass@app') {
				currentExistingProfiles.push(<option key={profile} value={profile}>{profile}</option>)
			}
		}
		/*If any profiles exist reset the <select> element to the first entry and change the state accordingly*/
		if (currentExistingProfiles.length > 0) {
			resetProfileForm();
			this.setState({
				existingProfiles: currentExistingProfiles,
				currentSelectedProfile: currentExistingProfiles[0].key
			})
			/*If no profiles exist, return everything to an "empty" state*/
		} else {
			this.setState({
				existingProfiles: [],
				currentSelectedProfile: ''
			})
		}
	}
	/*When changing the <select> element, set the state to match the selection*/
	profileChange(a) {
		this.setState({
			currentSelectedProfile: a.target.value
		});
	}
	/*Method for handling the buttons inside the "Profile" component*/
	profileHandleClick(selection) {
		/*Handler for when the "Save" button is clicked*/
		if (selection === 'save') {
			var shouldAllowSave = true;
			var currentProfileName = this.state.profileName;
			var currentProfileNameLower = currentProfileName.toLowerCase();
			/*Checking if the profile name already exists in localstorage*/
			for (var key in localStorage) {
				if (key.toLowerCase() === currentProfileNameLower) {
					shouldAllowSave = false;
				}
			}
			/*Checking if the profile name adheres to all rules (Not empty, alphanumeric and "-" characters only and less than 12 characters)*/
			if (currentProfileName === '' || /\W/.test(currentProfileName) || currentProfileName.length > 11) {
				this.setState({
					wrongNameVisible: true
				});
			} else {
				/*If the profile name is correct and does not exist, proceed to save the profile*/
				if (shouldAllowSave === true) {
					this.props.onClick(currentProfileName, selection);
					this.profilesHaveChanged(currentProfileName);
					/*If the profile name is correct but a same name exists in localstorage, render a prompt to overwrite the profile*/
				} else {
					this.setState({
						sameNameVisible: true
					})
				}
			}
			/*Handler for when the "Load" button is clicked*/
		} else if (selection === 'load') {
			var selectedProfileName = this.state.currentSelectedProfile;
			this.props.onClick(selectedProfileName, selection);
		}
	}
	/*Method for when the "Delete" button is clicked*/
	profileDeleteClick() {
		localStorage.removeItem(this.state.currentSelectedProfile);
		this.profilesHaveChanged();
	}
	/*Method for when something is typed in the textbox, changing the state accordingly*/
	handleTextChange(event) {
		this.setState({
			profileName: event.target.value
		})
	}
	/*Method for closing the "Profile name already exists" prompt Modal*/
	closeSameNameVisible() {
		this.setState({
			sameNameVisible: false
		});
	}
	/*Method for saving the profile and closing the "Profile name already exists" prompt Modal after the user clicked "Confirm"*/
	saveSameNameVisible() {
		var currentProfileName = this.state.profileName;
		this.setState({
			sameNameVisible: false
		});
		this.props.onClick(currentProfileName, 'save');
		this.profilesHaveChanged(currentProfileName);
	}
	/*Method for closing the "Profile name is wrong" prompt Modal*/
	closeWrongNameVisible() {
		this.setState({
			wrongNameVisible: false
		});
	}
	render() {
		return (
			<div className="changes">
				<h3>
					Profiles
				</h3>
				<div className="input-field">
					<input type="text"
						value={this.state.profileName}
						onChange={this.handleTextChange}
						placeholder="Profile Name"
					/>
				</div>
				<select
					value={this.props.currentSelectedProfile}
					id="change-profile"
					onChange={this.profileChange}>
					{this.state.existingProfiles}
				</select>
				<div className="button-container">
					<Row>
						<Col xs={12} md={4}>
							<Button onClick={() => this.profileHandleClick('save')} bsStyle="primary" bsSize="large" block>Save</Button>
						</Col>
						<Col xs={12} md={4}>
							<Button onClick={() => this.profileHandleClick('load')} bsStyle="primary" bsSize="large" block>Load</Button>
						</Col>
						<Col xs={12} md={4}>
							<Button onClick={this.profileDeleteClick} bsStyle="primary" bsSize="large" block>Delete</Button>
						</Col>
					</Row>
				</div>
				<Modal className="same-name-modal" show={this.state.sameNameVisible} onHide={this.closeSameNameVisible}>
					<div className="close-modal">
						<i onClick={this.closeSameNameVisible} className="material-icons">close</i>
					</div>
					<div>
						<h4 className="modal-message">This profile name already exists. Overwrite?</h4>
						<p className="modal-button-container">
							<Button onClick={this.saveSameNameVisible} bsStyle="success">Confirm</Button>
							<Button onClick={this.closeSameNameVisible}>Cancel</Button>
						</p>
					</div>
				</Modal>
				<Modal className="same-name-modal" show={this.state.wrongNameVisible} onHide={this.closeWrongNameVisible}>
					<div className="close-modal">
						<i onClick={this.closeWrongNameVisible} className="material-icons">close</i>
					</div>
					<div>
						<h4 className="modal-message">Give a proper name to your new profile.<br />Only alphanumeric characters are allowed.<br />The name should be less than 12 characters long.</h4>
					</div>
				</Modal>
			</div>
		);
	}
}

export default GodProfile;