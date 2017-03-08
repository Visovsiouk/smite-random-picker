import React from 'react';
import { Col } from 'react-bootstrap';

function shuffleArray(names, src) {
	let i = names.length - 1;
	for (; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const tempname = names[i];
		names[i] = names[j];
		names[j] = tempname;
		const tempsrc = src[i];
		src[i] = src[j];
		src[j] = tempsrc;
	}
	return names[i], src[i];
}

class GodNamesFetch extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
				gods: {}
			};
	}
	componentDidMount(){
		shuffleArray(this.props.gods.names, this.props.gods.src);
		console.log(this.props.gods);
	}
	render() {	
		return (
			<div className="Randomizer-container">
				<Col xs={12}>
					<div className="Randomizer-item">
						<h1>{this.props.gods.names[0]}</h1>
						<img src={this.props.gods.src[0]} alt="god" />
					</div>
				</Col>
			</div>
		)		
	}
}

export default GodNamesFetch;