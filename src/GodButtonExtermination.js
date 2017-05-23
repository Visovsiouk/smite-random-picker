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
		if (localStorage.getItem("extermination@app") !== null) {
			this.populateFromLocalStorage();
		}
	}
	populateFromLocalStorage() {
		var buttonstate = JSON.parse(localStorage.getItem('extermination@app'));
		this.setState({
			active: buttonstate
		})
	}
	handleExterminationclick() {
		var isButtonActive = this.state.active;
		if (isButtonActive === false) {
			localStorage.setItem('extermination@app', true);
			this.setState({
				active: true
			})
		} else {
			localStorage.setItem('extermination@app', false);
			this.setState({
				active: false
			})
		}
    }	
	render() {
		return (
			<div className="control-button">
				<Button onClick={this.handleExterminationclick} active={this.state.active} bsStyle="primary" bsSize="small" block>Extermination</Button>
			</div>
		)		
	}
}

export default GodButtonExtermination;