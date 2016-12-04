import React from 'react';
import GodPantheon  from'./GodPantheon';
import GodClass  from'./GodClass';
import GodPicture from './GodPicture';
import GodButtons from './GodButtons';
import { Col, Row, Button } from 'react-bootstrap';


function resetForm() {
	document.getElementById("Change-pantheon").selectedIndex = 0;
	document.getElementById("Change-godclass").selectedIndex = 0;
}


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
					{id: 19, name: 'Cabrakan', src: './images/god-icons/Cabrakan.png', pantheon: 'Mayan', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 20, name: 'Camazotz', src: './images/god-icons/Camazotz.png', pantheon: 'Mayan', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 21, name: 'Chaac', src: './images/god-icons/Chaac.png', pantheon: 'Mayan', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 22, name: "Chang'e", src: './images/god-icons/Change.png', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 23, name: 'Chiron', src: './images/god-icons/Chiron.png', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 24, name: 'Chronos', src: './images/god-icons/Chronos.png', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 25, name: 'Cupid', src: './images/god-icons/Cupid.png', pantheon: 'Roman', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 26, name: 'Erlang Shen', src: './images/god-icons/ErlangShen.png', pantheon: 'Chinese', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 27, name: 'Fafnir', src: './images/god-icons/Fafnir.png', pantheon: 'Norse', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 28, name: 'Fenrir', src: './images/god-icons/Fenrir.png', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 29, name: 'Freya', src: './images/god-icons/Freya.png', pantheon: 'Norse', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 30, name: 'Geb', src: './images/god-icons/Geb.png', pantheon: 'Egyptian', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 31, name: 'Guan Yu', src: './images/god-icons/GuanYu.png', pantheon: 'Chinese', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 32, name: 'Hades', src: './images/god-icons/Hades.png', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 33, name: 'He Bo', src: './images/god-icons/HeBo.png', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 34, name: 'Hel', src: './images/god-icons/Hel.png', pantheon: 'Norse', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 35, name: 'Hercules', src: './images/god-icons/Hercules.png', pantheon: 'Greek', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 36, name: 'Hou Yi', src: './images/god-icons/HouYi.png', pantheon: 'Chinese', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 37, name: 'Hun Batz', src: './images/god-icons/HunBatz.png', pantheon: 'Mayan', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 38, name: 'Isis', src: './images/god-icons/Isis.png', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 39, name: 'Izanami', src: './images/god-icons/Izanami.png', pantheon: 'Japanese', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 40, name: 'Janus', src: './images/god-icons/Janus.png', pantheon: 'Roman', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 41, name: 'Jing Wei', src: './images/god-icons/JingWei.png', pantheon: 'Chinese', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 42, name: 'Kali', src: './images/god-icons/Kali.png', pantheon: 'Hindu', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 43, name: 'Khepri', src: './images/god-icons/Khepri.png', pantheon: 'Egyptian', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 44, name: 'Kukulkan', src: './images/god-icons/Kukulkan.png', pantheon: 'Mayan', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 45, name: 'Kumbhakarna', src: './images/god-icons/Kumbhakarna.png', pantheon: 'Hindu', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 46, name: 'Loki', src: './images/god-icons/Loki.png', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 47, name: 'Medusa', src: './images/god-icons/Medusa.png', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 48, name: 'Mercury', src: './images/god-icons/Mercury.png', pantheon: 'Roman', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 49, name: 'Neith', src: './images/god-icons/Neith.png', pantheon: 'Egyptian', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 50, name: 'Nemesis', src: './images/god-icons/Nemesis.png', pantheon: 'Greek', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 51, name: 'Ne Zha', src: './images/god-icons/NeZha.png', pantheon: 'Chinese', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 52, name: 'Nike', src: './images/god-icons/Nike.png', pantheon: 'Greek', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},					
					{id: 53, name: 'Nox', src: './images/god-icons/Nox.png', pantheon: 'Roman', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 54, name: 'Nu Wa', src: './images/god-icons/NuWa.png', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 55, name: 'Odin', src: './images/god-icons/Odin.png', pantheon: 'Norse', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 56, name: 'Osiris', src: './images/god-icons/Osiris.png', pantheon: 'Egyptian', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 57, name: 'Poseidon', src: './images/god-icons/Poseidon.png', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 58, name: 'Ra', src: './images/god-icons/Ra.png', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 59, name: 'Raijin', src: './images/god-icons/Raijin.png', pantheon: 'Japanese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 60, name: 'Rama', src: './images/god-icons/Rama.png', pantheon: 'Hindu', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 61, name: 'Ratatoskr', src: './images/god-icons/Ratatoskr.png', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 62, name: 'Ravana', src: './images/god-icons/Ravana.png', pantheon: 'Hindu', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 63, name: 'Scylla', src: './images/god-icons/Scylla.png', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 64, name: 'Serquet', src: './images/god-icons/Serquet.png', pantheon: 'Egyptian', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 65, name: 'Skadi', src: './images/god-icons/Skadi.png', pantheon: 'Norse', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 66, name: 'Sobek', src: './images/god-icons/Sobek.png', pantheon: 'Egyptian', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 67, name: 'Sol', src: './images/god-icons/Sol.png', pantheon: 'Norse', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 68, name: 'Sun Wukong', src: './images/god-icons/SunWukong.png', pantheon: 'Chinese', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 69, name: 'Susano', src: './images/god-icons/Susano.png', pantheon: 'Japanese', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 70, name: 'Sylvanus', src: './images/god-icons/Sylvanus.png', pantheon: 'Roman', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 71, name: 'Terra', src: './images/god-icons/Terra.png', pantheon: 'Roman', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 72, name: 'Thanatos', src: './images/god-icons/Thanatos.png', pantheon: 'Greek', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 73, name: 'Thor', src: './images/god-icons/Thor.png', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 74, name: 'Thoth', src: './images/god-icons/Thoth.png', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 75, name: 'Tyr', src: './images/god-icons/Tyr.png', pantheon: 'Norse', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 76, name: 'Ullr', src: './images/god-icons/Ullr.png', pantheon: 'Norse', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 77, name: 'Vamana', src: './images/god-icons/Vamana.png', pantheon: 'Hindu', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 78, name: 'Vulcan', src: './images/god-icons/Vulcan.png', pantheon: 'Roman', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 79, name: 'Xabalanque', src: './images/god-icons/Xabalanque.png', pantheon: 'Mayan', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 80, name: 'Xing Tian', src: './images/god-icons/XingTian.png', pantheon: 'Chinese', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 81, name: 'Ymir', src: './images/god-icons/Ymir.png', pantheon: 'Norse', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 82, name: 'Zeus', src: './images/god-icons/Zeus.png', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 83, name: 'Zhong Kui', src: './images/god-icons/ZhongKui.png', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
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
		this.setState({selectedGods : this.state.gods.map((godselect) => {
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
			selectedGods : this.state.gods.map((godEverythingChange) => {
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
			selectedGods : this.state.gods.map((godEverythingChange) => {
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
		resetForm();
		this.setState({
			pantheon: newPantheon,
			godclass: newGodclass,
			selectedGods : this.state.gods.map((godEverythingChange) => {
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
			gods : this.state.gods.map((godpic) => {
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
		var gods = this.state.gods.map((god, i) => {
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
			}return gods
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