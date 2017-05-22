import React from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import { extSelectedGod } from './actions/exterminateAction'
import ReactAudioPlayer from 'react-audio-player'

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
		shuffleArray(this.props.gods.names, this.props.gods.porsrc, this.props.gods.selsrc);
		this.props.dispatch(extSelectedGod(this.props.gods.names[0]));
	}
	modalDisplay(currentGod) {
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

GodNamesFetch = connect((store) => {
	return {
		selectedGod: store.selectedGod
	};
})(GodNamesFetch)

export default GodNamesFetch;

