import React from 'react';
import { Button } from 'react-bootstrap';

class GodButtonReset extends React.Component  {
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
			<div className="control-button">
				<Button onClick={this.handleResetclick} bsStyle="primary" bsSize="small" block>Reset</Button>
			</div>
		)		
	}
}

export default GodButtonReset;