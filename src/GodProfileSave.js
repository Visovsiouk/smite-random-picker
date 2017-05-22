import React from 'react';
import { Button } from 'react-bootstrap';

class GodProfileSave extends React.Component {
	constructor(props) {
		super(props);
			this.state = { 
				profileName: ''
			};
		this.profileSaveClick = this.profileSaveClick.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}
	profileSaveClick() {
		var shouldAllowSave = true;
		var currentProfileName = this.state.profileName;
		var currentProfileNameLower = currentProfileName.toLowerCase();
		for (var key in localStorage) {
				if (key.toLowerCase() === currentProfileNameLower) {
					shouldAllowSave = false;
				}
		}
		if (currentProfileName === '' || /\W/.test(currentProfileName)){
			alert('Give a proper name to your new profile.\nOnly alphanumeric and "-" characters are allowed.');
		} else {
			if (shouldAllowSave === true) {
				this.props.onClick(currentProfileName);
			} else {
				alert('This profile name already exists');
			}
		} 
    }
	handleTextChange(event) {
    	this.setState ({profileName: event.target.value});
  	}	
	render() {
		return (
			<div className="changes">
				<h3>
					Save Profile
				</h3>
				<input type="text" 
					value={this.state.profileName}
        			onChange={this.handleTextChange} 
				/>
				<Button onClick={this.profileSaveClick} bsStyle="primary" bsSize="small" block>Save Profile</Button>
			</div>
		);
	}
}

export default GodProfileSave;