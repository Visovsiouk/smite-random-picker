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
	}
    handleResetclick(a, b) {
		var pantheon = "All"
		var godclass = "All"
		this.props.onClick(pantheon, godclass);
    }
	render() {
		return (
			<div className="Changes">
				<Button onClick={this.handleResetclick} bsStyle="primary" bsSize="small" block>Reset</Button>
			</div>
		)		
	}
}

export default GodButtons;