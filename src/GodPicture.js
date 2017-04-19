import React from 'react';
import LazyLoad from 'react-lazyload';

class GodPicture extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
			};
	}
	render() {
		return (
			<div onClick={this.props.onClick} className={this.props.pictureClassName}>
				<LazyLoad placeholder={<img src="./images/god-icons/Placeholder.png" />}>
					<img src={this.props.src} alt={this.props.pantheon} />
				</LazyLoad>
				<h5>{this.props.name}</h5>
			</div>
		)
	}
}

export default GodPicture;