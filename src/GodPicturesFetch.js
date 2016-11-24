import React from 'react';
import GodPantheon  from'./GodPantheon';
import GodClass  from'./GodClass';
import GodPicture from './GodPicture';
import GodButtons from './GodButtons';
import { Col, Row } from 'react-bootstrap';

class GodPicturesFetch extends React.Component {
	constructor(props) {
		super(props);
			this.state = { 
				pantheon: 'All',  
				godclass: 'All', 
				pictureClassName: "God-picture-div green",
				gods : [
					{name: 'Agni', src: './images/god-icons/Agni.png', pantheon: 'Hindu', godclass: 'Mage'},
					{name: 'Ah Muzen Cab', src: './images/god-icons/AMC.png', pantheon: 'Mayan', godclass: 'Hunter'},				
					{name: 'Ah Puch', src: './images/god-icons/AhPuch.png', pantheon: 'Mayan', godclass: 'Mage'},
					{name: 'Amaterasu', src: './images/god-icons/Amaterasu.png', pantheon: 'Japanese', godclass: 'Warrior'},
					{name: 'Anhur', src: './images/god-icons/Anhur.png', pantheon: 'Egyptian', godclass: 'Hunter'},
					{name: 'Anubis', src: './images/god-icons/Anubis.png', pantheon: 'Egyptian', godclass: 'Mage'},
					{name: 'Ao Kuang', src: './images/god-icons/AoKuang.png', pantheon: 'Chinese', godclass: 'Mage'},
					{name: 'Aphrodite', src: './images/god-icons/Aphrodite.png', pantheon: 'Greek', godclass: 'Mage'},
					{name: 'Apollo', src: './images/god-icons/Apollo.png', pantheon: 'Greek', godclass: 'Hunter'},
					{name: 'Arachne', src: './images/god-icons/Arachne.png', pantheon: 'Greek', godclass: 'Assassin'},
					{name: 'Ares', src: './images/god-icons/Ares.png', pantheon: 'Greek', godclass: 'Guardian'},
					{name: 'Artemis', src: './images/god-icons/Artemis.png', pantheon: 'Greek', godclass: 'Hunter'},
					{name: 'Athena', src: './images/god-icons/Athena.png', pantheon: 'Greek', godclass: 'Guardian'},
					{name: 'Awilix', src: './images/god-icons/Awilix.png', pantheon: 'Mayan', godclass: 'Assassin'},
					{name: 'Bacchus', src: './images/god-icons/Bacchus.png', pantheon: 'Roman', godclass: 'Guardian'},
					{name: 'Bakasura', src: './images/god-icons/Bakasura.png', pantheon: 'Hindu', godclass: 'Assassin'},
					{name: 'Bastet', src: './images/god-icons/Bastet.png', pantheon: 'Egyptian', godclass: 'Assassin'},
					{name: 'Bellona', src: './images/god-icons/Bellona.png', pantheon: 'Roman', godclass: 'Warrior'},
				]
			};
		this.changePantheon = this.changePantheon.bind(this);
		this.changeGodclass = this.changeGodclass.bind(this);
		this.changeBoth = this.changeBoth.bind(this);
		this.handleButtonclick = this.handleButtonclick.bind(this);
	}
	changePantheon(newPantheon) {
		this.setState({
			pantheon: newPantheon
		});
	}
	changeGodclass(newGodclass) {
		this.setState({
			godclass: newGodclass
		});
	}
	changeBoth(newPantheon, newGodclass, selectedTrue, changedClass) {
		this.setState({
			pantheon: newPantheon,
			godclass: newGodclass,
			isSelected: selectedTrue,
			pictureClassName: changedClass
		});
	}
    handleButtonclick() {
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
	handlePictureClick (isSelected, src){
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
		var currentPantheon = this.state.pantheon;
		var currentGodclass = this.state.godclass;
		var isSelected = this.state.isSelected;
		var changeClass = this.state.pictureClassName;
		var handlePictureClick = this.handlePictureClick;
		var gods = this.state.gods.map(function(god, i){
			if ( currentPantheon === god.pantheon && currentGodclass === god.godclass) {
				return (
				<div className="God-div" key={i} >
					<GodPicture 
						name={god.name} 
						src={god.src}
						isSelected={isSelected}
						pictureClassName={changeClass}
					/>
				</div>
				);
			} else if (currentPantheon === 'All' && currentGodclass === 'All' ) {
				return (
				<div className="God-div" key={i} >
					<GodPicture 
						name={god.name} 
						src={god.src}
						isSelected={isSelected}
						pictureClassName={changeClass}
						onClick={handlePictureClick.bind(this, isSelected, name)}
					/>
				</div>
				);
			} else if (currentPantheon === god.pantheon && currentGodclass === 'All' ) {
				return (
				<div className="God-div" key={i} >
					<GodPicture 
						name={god.name} 
						src={god.src}
						isSelected={isSelected}
						pictureClassName={changeClass}
					/>
				</div>
				);
			} else if (currentPantheon === 'All' && currentGodclass === god.godclass ) {
				return (
				<div className="God-div" key={i} >
					<GodPicture 
						name={god.name} 
						src={god.src}
						isSelected={isSelected}
						pictureClassName={changeClass}
					/>
				</div>
				);
			}
		})
		return (
		<div className="Options-container">
			<Row className="Options-row">
				<Col xs={4}>
					<GodPantheon 
						pantheon={this.state.pantheon} 
						onChange={this.changePantheon}
					/>
				</Col>
				<Col xs={4}>
					<GodClass 
						godclass={this.state.godclass} 
						onChange={this.changeGodclass}
					/>
				</Col>
				<Col xs={4}>
					<GodButtons	
						pantheon={this.state.pantheon} 
						godclass={this.state.godclass}
						onClick={this.handleButtonclick}
					/>
				</Col>
			</Row>
			<div className="God-container">{gods}</div>
		</div>
		);
	}	
}

export default GodPicturesFetch;