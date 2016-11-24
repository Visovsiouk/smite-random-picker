import React from 'react';

class GodPicture extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
				isSelected: true,
				pictureClassName: "God-picture-div green" 
			};
	}
	render() {
		var pictureClassName = this.props.pictureClassName;
		return (
			<div onClick={this.props.onClick} className={pictureClassName}>
				<img src={this.props.src} alt={this.props.pantheon} />
				<h5>{this.props.name}</h5>
			</div>
		)
	}
}

export default GodPicture;