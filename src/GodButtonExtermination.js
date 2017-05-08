import React from 'react';
import { Button } from 'react-bootstrap';

class GodButtonExtermination extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
				active: false
			};
		this.handleExterminationclick = this.handleExterminationclick.bind(this);
	}
	handleExterminationclick() {
		var isButtonActive = this.state.active;
		if (isButtonActive === false) {
			this.setState({
				active: true
			})
		} else {
			this.setState({
				active: false
			})
		}

    }
	render() {
		return (
			<div className="Control-Button">
				<Button onClick={this.handleExterminationclick} active={this.state.active} bsStyle="primary" bsSize="small" block>Extermination</Button>
			</div>
		)		
	}
}

export default GodButtonExtermination;