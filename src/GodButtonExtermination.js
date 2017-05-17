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
	componentDidMount() {
		if (localStorage.getItem("extermination") !== null) {
			this.populateFromLocalStorage();
		}
	}
	populateFromLocalStorage() {
		var buttonstate = JSON.parse(localStorage.getItem('extermination'));
		this.setState({
			active: buttonstate
		})
	}
	handleExterminationclick() {
		var isButtonActive = this.state.active;
		if (isButtonActive === false) {
			localStorage.setItem('extermination', true);
			this.setState({
				active: true
			})
		} else {
			localStorage.setItem('extermination', false);
			this.setState({
				active: false
			})
		}
		var buttonstate = localStorage.getItem('extermination');
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