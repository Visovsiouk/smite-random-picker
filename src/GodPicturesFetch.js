import React from 'react';
import { connect } from 'react-redux'
import { Col, Row, Button } from 'react-bootstrap';
import sortBy from 'lodash/sortBy';
import GodPantheon from './GodPantheon';
import GodClass from './GodClass';
import GodProfile from './GodProfile';
import GodPicture from './GodPicture';
import GodButtonReset from './GodButtonReset';
import GodButtonExtermination from './GodButtonExtermination';

function resetForm() {
	document.getElementById("change-pantheon").selectedIndex = 0;
	document.getElementById("change-godclass").selectedIndex = 0;
}

/*Component for handling most of the inner workings and rendering of the app*/
class GodPicturesFetch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pantheon: 'All',
			godclass: 'All',
			gods: [],
			profiles: [],
			nav: ''
		};
		this.populateFromAppCurrent = this.populateFromAppCurrent.bind(this);
		this.runRandomize = this.runRandomize.bind(this);
		this.changePantheon = this.changePantheon.bind(this);
		this.changeGodclass = this.changeGodclass.bind(this);
		this.changeBoth = this.changeBoth.bind(this);
		this.handleProfileClick = this.handleProfileClick.bind(this);
		this.exterminateGod = this.exterminateGod.bind(this);
		this.addToLocalStorage = this.addToLocalStorage.bind(this);
		this.showMenu = this.showMenu.bind(this);
	}
	componentDidMount() {
		/*Run the populateFromAppCurrent method on start*/
		this.populateFromAppCurrent();
	}
	componentWillReceiveProps(nextProps) {
		/*Check if "Extermination" is active. If it isn't save god selections to localstorage. If it is, run the exterminateGod method*/
		var shouldExterminate = JSON.parse(localStorage.getItem('extermination@app'));
		if (shouldExterminate === true) {
			this.exterminateGod(nextProps.selectedGod.selectedGod.name);
		} else {
			this.addToLocalStorage();
		}
	}
	/*Method for populating the app with gods*/
	populateFromAppCurrent() {
		var godsifchanged = [];
		/*Checking localstorage if the gods@app key is set*/
		var savedgods = JSON.parse(localStorage.getItem('gods@app'));
		/*Array of objects containing gods' names, src for thumbnail, src for portrait, sound src, pantheon, godclass and wether they are selected or not*/
		var allgods = [
			{ id: 1, name: 'Agni', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Hindu', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 2, name: 'Anubis', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 3, name: 'Arachne', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 4, name: 'Artemis', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 5, name: 'Bastet', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Egyptian', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 6, name: 'Hades', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 7, name: 'He Bo', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 8, name: 'Hel', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Norse', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 9, name: 'Hun Batz', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Mayan', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 10, name: 'Kali', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Hindu', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 11, name: 'Kukulkan', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Mayan', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 12, name: 'Odin', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Norse', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 13, name: 'Ra', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 14, name: 'Sobek', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Egyptian', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 15, name: 'Vamana', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Hindu', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 16, name: 'Ymir', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Norse', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 17, name: 'Zeus', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 18, name: 'Guan Yu', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Chinese', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 19, name: 'Bakasura', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Hindu', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 20, name: 'Anhur', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Egyptian', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 21, name: 'Cupid', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Roman', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 22, name: 'Thor', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 23, name: 'Ares', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 24, name: 'Freya', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Norse', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 25, name: 'Loki', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 26, name: 'Bacchus', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Roman', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 27, name: 'Xbalanque', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Mayan', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 28, name: 'Hercules', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 29, name: 'Vulcan', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Roman', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 30, name: 'Neith', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Egyptian', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 31, name: 'Poseidon', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 32, name: 'Aphrodite', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 33, name: 'Apollo', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 34, name: 'Ne Zha', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Chinese', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 35, name: 'Fenrir', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 36, name: 'Isis', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 37, name: 'Athena', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 38, name: 'Chronos', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 39, name: "Chang'e", src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 40, name: 'Tyr', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Norse', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 41, name: 'Zhong Kui', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 42, name: 'Mercury', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Roman', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 43, name: 'Thanatos', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 44, name: 'Sun Wukong', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Chinese', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 45, name: 'Ah Muzen Cab', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Mayan', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 46, name: 'Nu Wa', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 47, name: 'Chaac', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Mayan', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 48, name: 'Geb', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Egyptian', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 49, name: 'Nemesis', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 50, name: 'Scylla', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 51, name: 'Ullr', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Norse', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 52, name: 'Kumbhakarna', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Hindu', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 53, name: 'Osiris', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Egyptian', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 54, name: 'Janus', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Roman', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 55, name: 'Rama', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Hindu', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 56, name: 'Serquet', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Egyptian', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 57, name: 'Cabrakan', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Mayan', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 58, name: 'Sylvanus', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Roman', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 59, name: 'Nox', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Roman', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 60, name: 'Ao Kuang', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 61, name: 'Awilix', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Mayan', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 62, name: 'Hou Yi', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Chinese', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 63, name: 'Bellona', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Roman', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 64, name: 'Medusa', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 65, name: 'Ah Puch', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Mayan', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 66, name: 'Ratatoskr', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 67, name: 'Ravana', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Hindu', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 68, name: 'Khepri', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Egyptian', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 69, name: 'Xing Tian', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Chinese', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 70, name: 'Sol', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Norse', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 71, name: 'Chiron', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 72, name: 'Amaterasu', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Japanese', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 73, name: 'Raijin', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Japanese', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 74, name: 'Skadi', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Norse', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 75, name: 'Jing Wei', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Chinese', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 76, name: 'Susano', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Japanese', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 77, name: 'Fafnir', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Norse', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 78, name: 'Erlang Shen', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Chinese', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 79, name: 'Terra', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Roman', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 80, name: 'Izanami', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Japanese', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 81, name: 'Camazotz', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Mayan', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 82, name: 'Thoth', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 83, name: 'Nike', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Greek', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 84, name: 'The Morrigan', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Celtic', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 85, name: 'Kuzenbo', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Japanese', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 86, name: 'Cernunnos', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Celtic', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 87, name: 'Ganesha', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Hindu', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 88, name: 'Da Ji', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Chinese', godclass: 'Assassin', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 89, name: 'Cu Chulainn', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Celtic', godclass: 'Warrior', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 90, name: 'Artio', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Celtic', godclass: 'Guardian', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 91, name: 'Hachiman', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Japanese', godclass: 'Hunter', isSelected: true, pictureClassName: "god-picture-div green" },
			{ id: 92, name: 'Discordia', src: './images/god-icons/Giannis.png', porsrc: './images/god-portraits/Giannis.jpg', selsrc: './sound/select/Discordia.ogg', pantheon: 'Roman', godclass: 'Mage', isSelected: true, pictureClassName: "god-picture-div green" },			
		]
		/*If the gods@app key exists, proceed*/
		if (localStorage.getItem("gods@app") !== null) {
			var localpantheon = JSON.parse(localStorage.getItem('pantheon@app'));
			var localgodclass = JSON.parse(localStorage.getItem('godclass@app'));
			/*If the gods in localstorage are the same as the gods in the allgods array, proceed by changing the state from localstorage*/
			if (savedgods.length === allgods.length) {
				this.setState({
					gods: this.state.gods.concat(savedgods),
					pantheon: localpantheon,
					godclass: localgodclass
				})
				/*If the gods in localstorage are not the same as the gods in the allgods array (which means that a new god was added)*/
				/*Create a new array that has the selected states from localstorage and the new god is added as not selected */
			} else {
				for (var i = 0; i < allgods.length; i++) {
					if (savedgods[i] !== undefined) {
						if (savedgods[i].isSelected === false) {
							godsifchanged[i] = { id: allgods[i].id, name: allgods[i].name, src: allgods[i].src, porsrc: allgods[i].porsrc, selsrc: allgods[i].selsrc, pantheon: allgods[i].pantheon, godclass: allgods[i].godclass, isSelected: false, pictureClassName: "god-picture-div none" }
						} else {
							godsifchanged[i] = { id: allgods[i].id, name: allgods[i].name, src: allgods[i].src, porsrc: allgods[i].porsrc, selsrc: allgods[i].selsrc, pantheon: allgods[i].pantheon, godclass: allgods[i].godclass, isSelected: true, pictureClassName: "god-picture-div green" }
						}
					} else {
						godsifchanged[i] = { id: allgods[i].id, name: allgods[i].name, src: allgods[i].src, porsrc: allgods[i].porsrc, selsrc: allgods[i].selsrc, pantheon: allgods[i].pantheon, godclass: allgods[i].godclass, isSelected: false, pictureClassName: "god-picture-div none" }
					}
				}
				this.setState((prevState) => ({
					gods: prevState.gods.concat(godsifchanged),
					pantheon: localpantheon,
					godclass: localgodclass
				}));
			}
			/*If the gods@app does not exist, just fetch the gods from the allgods array*/
		} else {
			this.setState((prevState) => ({
				gods: prevState.gods.concat(allgods),
				pantheon: 'All',
				godclass: 'All'
			}));
		}
	}
	/*Mehod to push the currently selected gods to App and it will be subsequently pushed to GodsNamesFetch to be shuffled */
	runRandomize(push) {
		var pushSelectedGods = { names: [], porsrc: [], selsrc: [] };
		this.setState({
			selectedGods: this.state.gods.map((godselect) => {
				if (godselect.isSelected === true) {
					pushSelectedGods.names.push(godselect.name);
					pushSelectedGods.porsrc.push(godselect.porsrc);
					pushSelectedGods.selsrc.push(godselect.selsrc);
				}
				return godselect;
			})
		})
		this.props.onClick(pushSelectedGods);
	}
	/*Method that handles changes when another pantheon is selected*/
	changePantheon(newPantheon) {
		var godclass = this.state.godclass;
		this.setState({
			pantheon: newPantheon,
			selectedGods: this.state.gods.map((godEverythingChange) => {
				if (newPantheon !== 'All' && godclass === 'All') {
					if (godEverythingChange.pantheon === newPantheon) {
						godEverythingChange.isSelected = true;
						godEverythingChange.pictureClassName = "god-picture-div green"
					} else {
						godEverythingChange.isSelected = false;
						godEverythingChange.pictureClassName = "god-picture-div none"
					}
				} else if (newPantheon !== 'All' && godclass !== 'All') {
					if (godEverythingChange.pantheon === newPantheon && godEverythingChange.godclass === godclass) {
						godEverythingChange.isSelected = true;
						godEverythingChange.pictureClassName = "god-picture-div green"
					} else {
						godEverythingChange.isSelected = false;
						godEverythingChange.pictureClassName = "god-picture-div none"
					}
				} else if (newPantheon === 'All' && godclass !== 'All') {
					if (godEverythingChange.godclass === godclass) {
						godEverythingChange.isSelected = true;
						godEverythingChange.pictureClassName = "god-picture-div green"
					} else {
						godEverythingChange.isSelected = false;
						godEverythingChange.pictureClassName = "god-picture-div none"
					}
				} else if (newPantheon === 'All' && godclass === 'All') {
					godEverythingChange.isSelected = true;
					godEverythingChange.pictureClassName = "god-picture-div green"
				}
				return godEverythingChange;
			})
		});
	}
	/*Method that handles changes when another godclass is selected*/
	changeGodclass(newGodclass) {
		var pantheon = this.state.pantheon;
		this.setState({
			godclass: newGodclass,
			selectedGods: this.state.gods.map((godEverythingChange) => {
				if (newGodclass !== 'All' && pantheon === 'All') {
					if (godEverythingChange.godclass === newGodclass) {
						godEverythingChange.isSelected = true;
						godEverythingChange.pictureClassName = "god-picture-div green"
					} else {
						godEverythingChange.isSelected = false;
						godEverythingChange.pictureClassName = "god-picture-div none"
					}
				} else if (newGodclass !== 'All' && pantheon !== 'All') {
					if (godEverythingChange.godclass === newGodclass && godEverythingChange.pantheon === pantheon) {
						godEverythingChange.isSelected = true;
						godEverythingChange.pictureClassName = "god-picture-div green"
					} else {
						godEverythingChange.isSelected = false;
						godEverythingChange.pictureClassName = "god-picture-div none"
					}
				} else if (newGodclass === 'All' && pantheon !== 'All') {
					if (godEverythingChange.pantheon === pantheon) {
						godEverythingChange.isSelected = true;
						godEverythingChange.pictureClassName = "god-picture-div green"
					} else {
						godEverythingChange.isSelected = false;
						godEverythingChange.pictureClassName = "god-picture-div none"
					}
				} else if (newGodclass === 'All' && pantheon === 'All') {
					godEverythingChange.isSelected = true;
					godEverythingChange.pictureClassName = "god-picture-div green"
				}
				return godEverythingChange;
			})

		});
	}
	/*Method that handles changes when both another pantheon and godclass are selected*/
	changeBoth(newPantheon, newGodclass) {
		resetForm();
		this.setState({
			pantheon: newPantheon,
			godclass: newGodclass,
			selectedGods: this.state.gods.map((godEverythingChange) => {
				godEverythingChange.isSelected = true;
				godEverythingChange.pictureClassName = "god-picture-div green";
				return godEverythingChange;
			})
		});
	}
	/*Method that handles profiles' loading and saving*/
	handleProfileClick(profileName, selection) {
		if (selection === 'save') {
			/*Saving*/
			localStorage.setItem(profileName, JSON.stringify(this.state.gods));
		} else if (selection === 'load') {
			/*Loading*/
			var currentProfilePantheon = JSON.parse(localStorage.getItem(profileName));
			var currentGods = this.state.gods;
			var godsProfileChanged = [];
			/*Check if the gods saved in the profile are the same as the current gods, if they're not, 
			create a new array that has the selected states from localstorage and the new god is added as not selected */
			if (currentProfilePantheon.length !== currentGods.length) {
				for (var i = 0; i < currentGods.length; i++) {
					if (currentProfilePantheon[i] !== undefined) {
						if (currentProfilePantheon[i].isSelected === false) {
							godsProfileChanged[i] = { id: currentGods[i].id, name: currentGods[i].name, src: currentGods[i].src, porsrc: currentGods[i].porsrc, selsrc: currentGods[i].selsrc, pantheon: currentGods[i].pantheon, godclass: currentGods[i].godclass, isSelected: false, pictureClassName: "god-picture-div none" }
						} else {
							godsProfileChanged[i] = { id: currentGods[i].id, name: currentGods[i].name, src: currentGods[i].src, porsrc: currentGods[i].porsrc, selsrc: currentGods[i].selsrc, pantheon: currentGods[i].pantheon, godclass: currentGods[i].godclass, isSelected: true, pictureClassName: "god-picture-div green" }
						}
					} else {
						godsProfileChanged[i] = { id: currentGods[i].id, name: currentGods[i].name, src: currentGods[i].src, porsrc: currentGods[i].porsrc, selsrc: currentGods[i].selsrc, pantheon: currentGods[i].pantheon, godclass: currentGods[i].godclass, isSelected: false, pictureClassName: "god-picture-div none" }
					}
				}
				this.setState({
					gods: godsProfileChanged,
					pantheon: 'All',
					godclass: 'All'
				})
				/*If they are, load the gods from the profile*/
			} else {
				this.setState({
					gods: currentProfilePantheon,
					pantheon: 'All',
					godclass: 'All'
				})
			}
		}
	}
	/*Method for deselecting a chosen god when "Extermination" is enabled*/
	exterminateGod(godToExterminate) {
		this.setState({
			gods: this.state.gods.map((extgod) => {
				if (extgod.name === godToExterminate) {
					if (extgod.isSelected) {
						extgod.isSelected = false;
						extgod.pictureClassName = "god-picture-div none";
					}
				}
				return extgod;
			})
		})
		this.addToLocalStorage();
	}
	/*Method that adds the current gods to localstorage*/
	addToLocalStorage() {
		localStorage.setItem('gods@app', JSON.stringify(this.state.gods));
		localStorage.setItem('pantheon@app', JSON.stringify(this.state.pantheon));
		localStorage.setItem('godclass@app', JSON.stringify(this.state.godclass));
	}
	/*Method handling gods' picture click*/
	handlePictureClick(god) {
		this.setState({
			gods: this.state.gods.map((godpic) => {
				if (godpic.id === god.id) {
					if (!godpic.isSelected) {
						godpic.isSelected = true;
						godpic.pictureClassName = "god-picture-div green";
					} else {
						godpic.isSelected = false;
						godpic.pictureClassName = "god-picture-div none";
					}
				}
				return godpic;
			})
		})
	}
	showMenu() {
		if (this.state.nav === 'show-nav') {
			this.setState({
				nav: ''
			})
		} else {
			window.scrollTo(0, 0);
			this.setState({
				nav: 'show-nav'
			})
		}
	}
	render() {
		var currentPantheon = this.state.pantheon;
		var currentGodclass = this.state.godclass;
		var sortedGods = sortBy(this.state.gods, 'name');
		var gods = sortedGods.map((god, i) => {
			if (currentPantheon === god.pantheon && currentGodclass === god.godclass) {
				return (
					<div className="god-div" key={i} >
						<GodPicture
							name={god.name}
							src={god.src}
							pictureClassName={god.pictureClassName}
							onClick={this.handlePictureClick.bind(this, god)}
						/>
					</div>
				);
			} else if (currentPantheon === 'All' && currentGodclass === 'All') {
				return (
					<div className="god-div" key={i} >
						<GodPicture
							name={god.name}
							src={god.src}
							pictureClassName={god.pictureClassName}
							onClick={this.handlePictureClick.bind(this, god)}
						/>
					</div>
				);
			} else if (currentPantheon === god.pantheon && currentGodclass === 'All') {
				return (
					<div className="god-div" key={i} >
						<GodPicture
							name={god.name}
							src={god.src}
							pictureClassName={god.pictureClassName}
							onClick={this.handlePictureClick.bind(this, god)}
						/>
					</div>
				);
			} else if (currentPantheon === 'All' && currentGodclass === god.godclass) {
				return (
					<div className="god-div" key={i} >
						<GodPicture
							name={god.name}
							src={god.src}
							pictureClassName={god.pictureClassName}
							onClick={this.handlePictureClick.bind(this, god)}
						/>
					</div>
				);
			} return gods
		})
		return (
			<div id="gods-megacontainer" className={this.state.nav}>
				<div className="gods-container">
					<Col className="options-section" xs={12} md={3}>
						<h2>Welcome to SMITE Randomizer</h2>
						<Button className="button-randomize hidden-xs hidden-sm" onClick={this.runRandomize} bsStyle="primary" bsSize="large" block>Spin the Wheel of Fortune</Button>
						<Row>
							<GodButtonExtermination />
							<GodButtonReset
								pantheon={this.state.pantheon}
								godclass={this.state.godclass}
								onClick={this.changeBoth}
							/>
						</Row>
						<Row>
							<GodPantheon
								pantheon={this.state.pantheon}
								onChange={this.changePantheon}
							/>
							<GodClass
								godclass={this.state.godclass}
								onChange={this.changeGodclass}
							/>
						</Row>
						<GodProfile
							onClick={this.handleProfileClick}
						/>
					</Col>
					<Col className="gods-section" xs={12} md={9}>
						<Col className="nav-menu-buttons" xs={12} mdHidden lgHidden>
							<i onClick={this.showMenu} className="material-icons">menu</i>
							<Button className="button-randomize" onClick={this.runRandomize} bsStyle="primary" bsSize="large" block>Spin the Wheel of Fortune</Button>
						</Col>
						<div className="god-container">{gods}</div>
					</Col>
				</div>
			</div>
		);
	}
}

GodPicturesFetch = connect((store) => {
	return {
		selectedGod: store.selectedGod
	};
})(GodPicturesFetch)

export default GodPicturesFetch;