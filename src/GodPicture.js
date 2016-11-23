import React from 'react';

class GodPicture extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
				isSelected: true,
				pictureClassName: "God-picture-div green" 
			};
		this.handlePictureclick = this.handlePictureclick.bind(this);
	}
	/*STUCK HERE NEED TO CHANGE PROPS ON CLICK*/ 
    handlePictureclick() {
		var isSelected = this.state.isSelected;
		if (!isSelected) {
			this.setState({
				isSelected: true,
				pictureClassName: "God-picture-div green"
			})
		} else {
			this.setState({
				isSelected: false,
				pictureClassName: "God-picture-div none"
			})
		}
    }
	render() {
		var pictureClassName = this.props.pictureClassName;
		return (
			<div onClick={this.handlePictureclick} className={pictureClassName}>
				<img src={this.props.src} alt={this.props.pantheon} />
				<h5>{this.props.name}</h5>
			</div>
		)
	}
}

export default GodPicture;