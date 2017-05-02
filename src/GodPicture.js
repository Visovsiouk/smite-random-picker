import React from 'react';
import ProgressiveImage from 'react-progressive-image'

class GodPicture extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
			};
	}
	render() {
		return (
			<div onClick={this.props.onClick} className={this.props.pictureClassName}>
				<ProgressiveImage src={this.props.src} placeholder='./images/god-icons/Placeholder.png'>
					{(image) => <img src={image} alt={this.props.pantheon} />}
				</ProgressiveImage>
				<h5>{this.props.name}</h5>
			</div>
		)
	}
}

export default GodPicture;