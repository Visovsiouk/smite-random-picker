import React from 'react';
import { Col } from 'react-bootstrap';
import GodWheel from './GodWheel';

function shuffleArray(array) {
	let i = array.length - 1;
	for (; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array[i];
}

class GodNamesFetch extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
				gods: []
			};
	}
	render() {
		shuffleArray(this.props.gods);
		return (
			<div className="Randomizer-container">
				<Col xs={12}>
					<div>
						<GodWheel gods={this.props.gods} />
					</div>
				</Col>
			</div>
		)		
	}
}

export default GodNamesFetch;