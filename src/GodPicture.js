import React from 'react';

class GodPicture extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
				isSelected: true,
				className: "God-picture-div green" 
			};
		this.handlePictureclick = this.handlePictureclick.bind(this);
	}
    handlePictureclick() {
		var isSelected = this.state.isSelected;
		if (!isSelected) {
			this.setState({
				isSelected: true,
				className: "God-picture-div green"
			})
		} else {
			this.setState({
				isSelected: false,
				className: "God-picture-div none"
			})
		}
    }
	render() {
		return (
			<div onClick={this.handlePictureclick} className={this.state.className}>
				<img src={this.props.src} alt={this.props.pantheon} />
				<h6>{this.props.name}</h6>
			</div>
		)
	}
}

export default GodPicture;