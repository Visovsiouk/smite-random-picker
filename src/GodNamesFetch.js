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
	const resultgod = shuffleArray(this.props.gods);
	var gods = this.props.gods.map((god, i) => {
		return (
			<Col xs={3} key={i}>
				<div className="Pushed-god">{god}</div>
			</Col>
		)
	}); 
		return (
			<div className="Randomizer-container">
				<Col xs={12}>
					<div className="Randomizer-godnames">
						{gods}
					</div>
				</Col>
				<Col xs={12}>
					<div>
						{resultgod}
					</div>
				</Col>
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