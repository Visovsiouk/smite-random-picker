import React from 'react';
import { Button } from 'react-bootstrap';

class GodButtons extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
				pantheon: 'All',
				godclass: 'All',
				isSelected: true,
				pictureClassName: "God-picture-div green"
			};
		this.handleResetclick = this.handleResetclick.bind(this);
		this.handleSelectAllclick = this.handleSelectAllclick.bind(this);
		this.handleSelectNoneclick = this.handleSelectNoneclick.bind(this);
	}
    handleResetclick(a, b, c, d) {
		var pantheon = "All"
		var godclass = "All"
		var isSelected = true
		var pictureClassName = "God-picture-div green" 
		this.props.onClick(pantheon, godclass,isSelected, pictureClassName);
    }
	handleSelectAllclick(c) {
		var isSelected = true
		this.props.onClick(isSelected);
    }
	handleSelectNoneclick() {
		alert ('Select None')
    }
	render() {
		return (
			<div className="Changes">
				<Button onClick={this.handleResetclick} bsStyle="primary" bsSize="xsmall" block>Reset</Button>
				<Button onClick={this.handleSelectAllclick} bsStyle="primary" bsSize="xsmall" block>Select All</Button>
				<Button onClick={this.handleSelectNoneclick} bsStyle="primary" bsSize="xsmall" block>Select None</Button>
			</div>
		)		
	}
}

export default GodButtons;