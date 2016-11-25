import React from 'react';

class GodPicture extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
			};
	}
	render() {
		return (
			<div onClick={this.props.onClick} className={this.props.pictureClassName}>
				<img src={this.props.src} alt={this.props.pantheon} />
				<h5>{this.props.name}</h5>
			</div>
		)
	}
}

export default GodPicture;