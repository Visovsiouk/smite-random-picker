import React from 'react';
import { Button } from 'react-bootstrap';

/*"Extermination"" button component*/
class GodButtonExtermination extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
				exterminationActive: false
			};
		this.handleExterminationclick = this.handleExterminationclick.bind(this);
	}
	componentDidMount() {
		/*Checking localstorage if the extermination@app key is set*/
		if (localStorage.getItem("extermination@app") !== null) {
			this.populateFromLocalStorage();
		}
	}
	/*Method for setting the state for exetermination if the localstorage key exists*/
	populateFromLocalStorage() {
		var buttonstate = JSON.parse(localStorage.getItem('extermination@app'));
		this.setState({
			exterminationActive: buttonstate
		})
	}
	/*Method for handling the "Extermination" button click*/
	handleExterminationclick() {
		var isButtonActive = this.state.exterminationActive;
		if (isButtonActive === false) {
			localStorage.setItem('extermination@app', true);
			this.setState({
				exterminationActive: true
			})
		} else {
			localStorage.setItem('extermination@app', false);
			this.setState({
				exterminationActive: false
			})
		}
    }	
	render() {
		return (
			<div className="control-button">
				<Button onClick={this.handleExterminationclick} active={this.state.exterminationActive} bsStyle="primary" bsSize="small" block>Extermination</Button>
			</div>
		)		
	}
}

export default GodButtonExtermination;