import React from 'react';
import { Button } from 'react-bootstrap';

function resetProfileForm() {
	document.getElementById("change-profile").selectedIndex = 0;
}

class GodProfile extends React.Component {
	constructor(props) {
		super(props);
			this.state = { 
				profileName: '',
				existingProfiles: [],
				currentSelectedProfile: ''
			};
		this.profilesHaveChanged = this.profilesHaveChanged.bind(this);
		this.profileChange = this.profileChange.bind(this);
		this.profileHandleClick = this.profileHandleClick.bind(this);
		this.profileDeleteClick = this.profileDeleteClick.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}
	componentDidMount() {
		this.profilesHaveChanged();
	}
	profilesHaveChanged() {
		var currentExistingProfiles = [];
		for (var profile in localStorage) {
			if (profile !== 'gods@app' && profile !== 'extermination@app' && profile !== 'pantheon@app' && profile !== 'godclass@app'){
				currentExistingProfiles.push(<option key={profile} value={profile}>{profile}</option>)
			} 
		}
		if (currentExistingProfiles.length > 0) {
			resetProfileForm();
			this.setState({
				existingProfiles: currentExistingProfiles,
				currentSelectedProfile: currentExistingProfiles[0].key
			})
		} else {
			this.setState({
				existingProfiles: [],
				currentSelectedProfile: ''
			})
		}
	}
	profileChange(a) {
		this.setState({
			currentSelectedProfile: a.target.value
		});
	}
	profileHandleClick(selection) {
		if (selection === 'save'){
			var shouldAllowSave = true;
			var currentProfileName = this.state.profileName;
			var currentProfileNameLower = currentProfileName.toLowerCase();
			for (var key in localStorage) {
					if (key.toLowerCase() === currentProfileNameLower) {
						shouldAllowSave = false;
					}
			}
			if (currentProfileName === '' || /\W/.test(currentProfileName) || currentProfileName.length > 11) {
				alert('Give a proper name to your new profile.\nOnly alphanumeric and "-" characters are allowed.\nThe name should be less than 12 characters long.');
			} else {
				if (shouldAllowSave === true) {
					this.props.onClick(currentProfileName, selection);
					this.profilesHaveChanged(currentProfileName);
				} else {
					if (confirm('This profile name already exists. Overwrite?')) {
						this.props.onClick(currentProfileName, selection);
						this.profilesHaveChanged(currentProfileName);
					} 
				}
			}
		} else if (selection === 'load') {
			var selectedProfileName = this.state.currentSelectedProfile;
			this.props.onClick(selectedProfileName, selection);
		}
    }
	profileDeleteClick() {
		localStorage.removeItem(this.state.currentSelectedProfile);
		this.profilesHaveChanged();
	}
	handleTextChange(event) {
    	this.setState ({
			profileName: event.target.value
		})
  	}	
	render() {
		return (
			<div className="changes">
				<h3>
					Profiles
				</h3>
				<input type="text" 
					value={this.state.profileName}
        			onChange={this.handleTextChange} 
				/>
				<select 
					value={this.props.currentSelectedProfile}
					id="change-profile" 
					onChange={this.profileChange}>
						{this.state.existingProfiles}
				</select>
				<div className="button-container">
					<Button onClick={() => this.profileHandleClick('save')} bsStyle="primary" bsSize="small" block>Save</Button>
					<Button onClick={() => this.profileHandleClick('load')} bsStyle="primary" bsSize="small" block>Load</Button>
					<Button onClick={this.profileDeleteClick} bsStyle="primary" bsSize="small" block>Delete</Button>
				</div>
			</div>
		);
	}
}

export default GodProfile;