import React from 'react';
import { Button } from 'react-bootstrap';

class GodNamesFetch extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
				gods: []
			};
	}

	render() {
	var gods = this.props.gods; 
		return (
			<div className="Randomizer-container">
				{gods}
			</div>
		)		
	}
}

export default GodNamesFetch;