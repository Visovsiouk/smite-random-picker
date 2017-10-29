import React from 'react';
import { Button, Col } from 'react-bootstrap';

/*"Restet" button component*/
class GodButtonReset extends React.Component {
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
	/*Reseting pantheon and godclass to "All"*/
	handleResetclick(a, b) {
		var pantheon = "All"
		var godclass = "All"
		this.props.onClick(pantheon, godclass);
	}
	render() {
		return (
			<Col xs={12} md={6}>
				<div className="control-button">
					<Button onClick={this.handleResetclick} bsStyle="primary" bsSize="large" block>Reset</Button>
				</div>
			</Col>
		)
	}
}

export default GodButtonReset;