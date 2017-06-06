import React from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import { extSelectedGod } from './actions/exterminateAction'
import ReactAudioPlayer from 'react-audio-player'

/*Function for shuffling the gods names passed from App, using the Fisher-Yates shuffle*/
function shuffleArray(names, src, selsrc) {
	for (var i = names.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const tempname = names[i];
		names[i] = names[j];
		names[j] = tempname;
		const tempsrc = src[i];
		src[i] = src[j];
		src[j] = tempsrc;
		const tempselsrc = selsrc[i];
		selsrc[i] = selsrc[j];
		selsrc[j] = tempselsrc;
	}
	return [names[i], src[i], selsrc[i]];
}

/*Component handling the shuffling of gods*/
class GodNamesFetch extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
				gods: {},
				displayModal: 'none'
			};
			this.modalDisplay = this.modalDisplay.bind(this);
	}
	componentDidMount() {
		/*Run the shuffleArray function*/
		shuffleArray(this.props.gods.names, this.props.gods.porsrc, this.props.gods.selsrc);
		/*Set the prop as the first entry of the shuffled array and dispatch it with Redux*/
		this.props.dispatch(extSelectedGod(this.props.gods.names[0]));
	}
	/*Method for displaying the Modal only when the god image is loaded*/
	modalDisplay() {
		this.setState({
			displayModal: 'block'
		})
	}
	render() {	
		return (
			<div className="randomizer-container">
				<Col xs={12}>
					<div className="randomizer-item" style={{display: this.state.displayModal}}>
						<h1>{this.props.gods.names[0]}</h1>
						<img src={this.props.gods.porsrc[0]} alt="god" onLoad={this.modalDisplay} />
						<ReactAudioPlayer
							src={this.props.gods.selsrc[0]}
							autoPlay
						/>
						<h1>{this.state.currentGods}</h1>
					</div>
				</Col>
			</div>
		)		
	}
}

/*Redux connection to store*/
GodNamesFetch = connect((store) => {
	return {
		selectedGod: store.selectedGod
	};
})(GodNamesFetch)

export default GodNamesFetch;

