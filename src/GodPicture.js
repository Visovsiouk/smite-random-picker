import React from 'react';
import ProgressiveImage from 'react-progressive-image'

/*Placeholder component for loading the gods' pictures*/
class GodPicture extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
			};
	}
	render() {
		var currentClass = 'god-picture-div ' +  (this.props.godSelected === false || this.props.godSelected === undefined ? 'none' : 'green');

		return (
			<div onClick={this.props.onClick} className={currentClass}>
				<ProgressiveImage src={'./images/god-icons/' + this.props.ref_name + '.png'} placeholder='./images/god-icons/Placeholder.png'>
					{(image) => <img src={image} alt={this.props.pantheon} />}
				</ProgressiveImage>
				<h5>{this.props.name}</h5>
			</div>
		)
	}
}

export default GodPicture;