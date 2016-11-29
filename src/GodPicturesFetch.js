import React from 'react';
import GodPantheon  from'./GodPantheon';
import GodClass  from'./GodClass';
import GodPicture from './GodPicture';
import GodButtons from './GodButtons';
import { Col, Row, Button } from 'react-bootstrap';

class GodPicturesFetch extends React.Component {
	constructor(props) {
		super(props);
			this.state = { 
				pantheon: 'All',  
				godclass: 'All', 
				gods : [
					{id: 1, name: 'Agni', src: './images/god-icons/Agni.png', pantheon: 'Hindu', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 2, name: 'Ah Muzen Cab', src: './images/god-icons/AMC.png', pantheon: 'Mayan', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 3, name: 'Ah Puch', src: './images/god-icons/AhPuch.png', pantheon: 'Mayan', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 4, name: 'Amaterasu', src: './images/god-icons/Amaterasu.png', pantheon: 'Japanese', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 5, name: 'Anhur', src: './images/god-icons/Anhur.png', pantheon: 'Egyptian', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 6, name: 'Anubis', src: './images/god-icons/Anubis.png', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 7, name: 'Ao Kuang', src: './images/god-icons/AoKuang.png', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 8, name: 'Aphrodite', src: './images/god-icons/Aphrodite.png', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 9, name: 'Apollo', src: './images/god-icons/Apollo.png', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 10, name: 'Arachne', src: './images/god-icons/Arachne.png', pantheon: 'Greek', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 11, name: 'Ares', src: './images/god-icons/Ares.png', pantheon: 'Greek', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 12, name: 'Artemis', src: './images/god-icons/Artemis.png', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 13, name: 'Athena', src: './images/god-icons/Athena.png', pantheon: 'Greek', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 14, name: 'Awilix', src: './images/god-icons/Awilix.png', pantheon: 'Mayan', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 15, name: 'Bacchus', src: './images/god-icons/Bacchus.png', pantheon: 'Roman', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 16, name: 'Bakasura', src: './images/god-icons/Bakasura.png', pantheon: 'Hindu', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 17, name: 'Bastet', src: './images/god-icons/Bastet.png', pantheon: 'Egyptian', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 18, name: 'Bellona', src: './images/god-icons/Bellona.png', pantheon: 'Roman', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
				],
				selectedGods : []
			};
		this.runRandomize = this.runRandomize.bind(this);
		this.changePantheon = this.changePantheon.bind(this);
		this.changeGodclass = this.changeGodclass.bind(this);
		this.changeBoth = this.changeBoth.bind(this);
		this.handleButtonclick = this.handleButtonclick.bind(this);
	}
	runRandomize(push) {
		var pushSelectedGods = [];
		this.setState({selectedGods : this.state.gods.map(function(godselect){
			if(godselect.isSelected === true){
                pushSelectedGods.push(godselect.name); 
            }
			return godselect;
		})})
		this.props.onClick(pushSelectedGods);
	}
	changePantheon(newPantheon) {
		var godclass = this.state.godclass;
		this.setState({
			pantheon: newPantheon,
			selectedGods : this.state.gods.map(function(godEverythingChange){
				if (newPantheon !== 'All' && godclass === 'All'){
					if (godEverythingChange.pantheon === newPantheon ){
						godEverythingChange.isSelected = true;
						godEverythingChange.pictureClassName = "God-picture-div green"
					}	else	{
						godEverythingChange.isSelected = false;
						godEverythingChange.pictureClassName = "God-picture-div none"
					}
				} 	else if (newPantheon !== 'All' && godclass !== 'All')	{
					if (godEverythingChange.pantheon === newPantheon && godEverythingChange.godclass === godclass){
						godEverythingChange.isSelected = true;
						godEverythingChange.pictureClassName = "God-picture-div green"
					}	else	{
						godEverythingChange.isSelected = false;
						godEverythingChange.pictureClassName = "God-picture-div none"
					}
				} 	else if (newPantheon === 'All' && godclass !== 'All')	{
					if (godEverythingChange.godclass === godclass ){
						godEverythingChange.isSelected = true;
						godEverythingChange.pictureClassName = "God-picture-div green"
					}	else	{
						godEverythingChange.isSelected = false;
						godEverythingChange.pictureClassName = "God-picture-div none"
					}
				}	else if (newPantheon === 'All' && godclass === 'All')	{
					godEverythingChange.isSelected = true;
					godEverythingChange.pictureClassName = "God-picture-div green"
				}
				return godEverythingChange;
			})
		});
	}
	changeGodclass(newGodclass) {
		var pantheon = this.state.pantheon;
		this.setState({
			godclass: newGodclass,
			selectedGods : this.state.gods.map(function(godEverythingChange){
				if (newGodclass !== 'All' && pantheon === 'All'){
					if (godEverythingChange.godclass === newGodclass ){
						godEverythingChange.isSelected = true;
						godEverythingChange.pictureClassName = "God-picture-div green"
					}	else	{
						godEverythingChange.isSelected = false;
						godEverythingChange.pictureClassName = "God-picture-div none"
					}
				} 	else if (newGodclass !== 'All' && pantheon !== 'All')	{
					if (godEverythingChange.godclass === newGodclass && godEverythingChange.pantheon === pantheon){
						godEverythingChange.isSelected = true;
						godEverythingChange.pictureClassName = "God-picture-div green"
					}	else	{
						godEverythingChange.isSelected = false;
						godEverythingChange.pictureClassName = "God-picture-div none"
					} 
				} else if (newGodclass === 'All' && pantheon !== 'All')	{
					if (godEverythingChange.pantheon === pantheon ){
						godEverythingChange.isSelected = true;
						godEverythingChange.pictureClassName = "God-picture-div green"
					}	else	{
						godEverythingChange.isSelected = false;
						godEverythingChange.pictureClassName = "God-picture-div none"
					}
				}	else if (newGodclass === 'All' && pantheon === 'All')	{
					godEverythingChange.isSelected = true;
					godEverythingChange.pictureClassName = "God-picture-div green"
				}
				return godEverythingChange;
			})
			
		});
	}
	changeBoth(newPantheon, newGodclass) {
		this.setState({
			pantheon: newPantheon,
			godclass: newGodclass,
			selectedGods : this.state.gods.map(function(godEverythingChange){
				godEverythingChange.isSelected = true;
				godEverythingChange.pictureClassName = "God-picture-div green"
			return godEverythingChange;
			})
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
	handlePictureClick(god) {
		this.setState({
			gods : this.state.gods.map(function(godpic){
			if(godpic.id === god.id){
                if(!godpic.isSelected){
                	godpic.isSelected = true;
                   	godpic.pictureClassName = "God-picture-div green";
                } else {
					godpic.isSelected = false;
                   	godpic.pictureClassName = "God-picture-div none";
                }
            }
            return godpic;
		})})	
	}
	render() {
		var currentPantheon = this.state.pantheon;
		var currentGodclass = this.state.godclass;
		var gods = this.state.gods.map(function(god, i){
			if ( currentPantheon === god.pantheon && currentGodclass === god.godclass) {
				return (
				<div className="God-div" key={i} >
					<GodPicture 
						name={god.name} 
						src={god.src}
						pictureClassName={god.pictureClassName}
						onClick={this.handlePictureClick.bind(this, god)}
					/>
				</div>
				);
			} else if (currentPantheon === 'All' && currentGodclass === 'All' ) {
				return (
				<div className="God-div" key={i} >
					<GodPicture 
						name={god.name} 
						src={god.src}
						pictureClassName={god.pictureClassName}
						onClick={this.handlePictureClick.bind(this, god)}
					/>
				</div>
				);
			} else if (currentPantheon === god.pantheon && currentGodclass === 'All' ) {
				return (
				<div className="God-div" key={i} >
					<GodPicture 
						name={god.name} 
						src={god.src}
						pictureClassName={god.pictureClassName}
						onClick={this.handlePictureClick.bind(this, god)}
					/>
				</div>
				);
			} else if (currentPantheon === 'All' && currentGodclass === god.godclass ) {
				return (
				<div className="God-div" key={i} >
					<GodPicture 
						name={god.name} 
						src={god.src}
						pictureClassName={god.pictureClassName}
						onClick={this.handlePictureClick.bind(this, god)}
					/>
				</div>
				);
			}
		}.bind(this))
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
						onClick={this.changeBoth}
					/>
				</Col>
			</Row>
			<Button className="Button-randomize" onClick={this.runRandomize} bsStyle="primary" bsSize="large" block>Spin the Wheel of Fortune</Button>
			<div className="God-container">{gods}</div>
		</div>
		);
	}	
}

export default GodPicturesFetch;