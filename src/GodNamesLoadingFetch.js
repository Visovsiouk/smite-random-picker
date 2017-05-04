import React from 'react';
import { Col } from 'react-bootstrap';

function shuffleArray(names, src, selsrc) {
	let i = names.length - 1;
	for (; i > 0; i--) {
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
	return names[i], src[i], selsrc[i];
}

class GodNamesLoadingFetch extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 

			};
	}
	render() {	
		return (
			<div>
				<img src="./images/god-icons/Agni.png"/>
			</div>
		)		
	}
}

export default GodNamesLoadingFetch;