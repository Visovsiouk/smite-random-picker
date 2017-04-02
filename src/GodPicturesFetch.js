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
					{id: 1, name: 'Agni', src: './images/god-icons/Agni.png', porsrc: './images/god-portraits/Agni.jpg', pantheon: 'Hindu', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 2, name: 'Ah Muzen Cab', src: './images/god-icons/AMC.png', porsrc: './images/god-portraits/AMC.jpg', pantheon: 'Mayan', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 3, name: 'Ah Puch', src: './images/god-icons/AhPuch.png', porsrc: './images/god-portraits/AhPuch.jpg', pantheon: 'Mayan', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 4, name: 'Amaterasu', src: './images/god-icons/Amaterasu.png', porsrc: './images/god-portraits/Amaterasu.jpg', pantheon: 'Japanese', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 5, name: 'Anhur', src: './images/god-icons/Anhur.png', porsrc: './images/god-portraits/Anhur.jpg', pantheon: 'Egyptian', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 6, name: 'Anubis', src: './images/god-icons/Anubis.png', porsrc: './images/god-portraits/Anubis.jpg', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 7, name: 'Ao Kuang', src: './images/god-icons/AoKuang.png', porsrc: './images/god-portraits/AoKuang.jpg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 8, name: 'Aphrodite', src: './images/god-icons/Aphrodite.png', porsrc: './images/god-portraits/Aphrodite.jpg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 9, name: 'Apollo', src: './images/god-icons/Apollo.png', porsrc: './images/god-portraits/Apollo.jpg', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 10, name: 'Arachne', src: './images/god-icons/Arachne.png', porsrc: './images/god-portraits/Arachne.jpg', pantheon: 'Greek', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 11, name: 'Ares', src: './images/god-icons/Ares.png', porsrc: './images/god-portraits/Ares.jpg', pantheon: 'Greek', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 12, name: 'Artemis', src: './images/god-icons/Artemis.png', porsrc: './images/god-portraits/Agni.jpg', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 13, name: 'Athena', src: './images/god-icons/Athena.png', porsrc: './images/god-portraits/Artemis.jpg', pantheon: 'Greek', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 14, name: 'Awilix', src: './images/god-icons/Awilix.png', porsrc: './images/god-portraits/Awilix.jpg', pantheon: 'Mayan', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 15, name: 'Bacchus', src: './images/god-icons/Bacchus.png', porsrc: './images/god-portraits/Bacchus.jpg', pantheon: 'Roman', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 16, name: 'Bakasura', src: './images/god-icons/Bakasura.png', porsrc: './images/god-portraits/Bakasura.jpg', pantheon: 'Hindu', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 17, name: 'Bastet', src: './images/god-icons/Bastet.png', porsrc: './images/god-portraits/Bastet.jpg', pantheon: 'Egyptian', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 18, name: 'Bellona', src: './images/god-icons/Bellona.png', porsrc: './images/god-portraits/Bellona.jpg', pantheon: 'Roman', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 19, name: 'Cabrakan', src: './images/god-icons/Cabrakan.png', porsrc: './images/god-portraits/Cabrakan.jpg', pantheon: 'Mayan', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 20, name: 'Camazotz', src: './images/god-icons/Camazotz.png', porsrc: './images/god-portraits/Camazotz.jpg', pantheon: 'Mayan', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 21, name: 'Cernunnos', src: './images/god-icons/Cernunnos.png', porsrc: './images/god-portraits/Cernunnos.jpg', pantheon: 'Celtic', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 22, name: 'Chaac', src: './images/god-icons/Chaac.png', porsrc: './images/god-portraits/Chaac.jpg', pantheon: 'Mayan', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 23, name: "Chang'e", src: './images/god-icons/Change.png', porsrc: './images/god-portraits/Change.jpg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 24, name: 'Chiron', src: './images/god-icons/Chiron.png', porsrc: './images/god-portraits/Chiron.jpg', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 25, name: 'Chronos', src: './images/god-icons/Chronos.png', porsrc: './images/god-portraits/Chronos.jpg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 26, name: 'Cupid', src: './images/god-icons/Cupid.png', porsrc: './images/god-portraits/Cupid.jpg', pantheon: 'Roman', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 27, name: 'Erlang Shen', src: './images/god-icons/ErlangShen.png', porsrc: './images/god-portraits/ErlangShen.jpg', pantheon: 'Chinese', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 28, name: 'Fafnir', src: './images/god-icons/Fafnir.png', porsrc: './images/god-portraits/Fafnir.jpg', pantheon: 'Norse', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 29, name: 'Fenrir', src: './images/god-icons/Fenrir.png', porsrc: './images/god-portraits/Fenrir.jpg', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 30, name: 'Freya', src: './images/god-icons/Freya.png', porsrc: './images/god-portraits/Freya.jpg', pantheon: 'Norse', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 31, name: 'Geb', src: './images/god-icons/Geb.png', porsrc: './images/god-portraits/Geb.jpg', pantheon: 'Egyptian', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 32, name: 'Guan Yu', src: './images/god-icons/GuanYu.png', porsrc: './images/god-portraits/GuanYu.jpg', pantheon: 'Chinese', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 33, name: 'Hades', src: './images/god-icons/Hades.png', porsrc: './images/god-portraits/Hades.jpg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 34, name: 'He Bo', src: './images/god-icons/HeBo.png', porsrc: './images/god-portraits/HeBo.jpg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 35, name: 'Hel', src: './images/god-icons/Hel.png', porsrc: './images/god-portraits/Hel.jpg', pantheon: 'Norse', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 36, name: 'Hercules', src: './images/god-icons/Hercules.png', porsrc: './images/god-portraits/Hercules.jpg', pantheon: 'Greek', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 37, name: 'Hou Yi', src: './images/god-icons/HouYi.png', porsrc: './images/god-portraits/HouYi.jpg', pantheon: 'Chinese', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 38, name: 'Hun Batz', src: './images/god-icons/HunBatz.png', porsrc: './images/god-portraits/HunBatz.jpg', pantheon: 'Mayan', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 39, name: 'Isis', src: './images/god-icons/Isis.png', porsrc: './images/god-portraits/Isis.jpg', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 40, name: 'Izanami', src: './images/god-icons/Izanami.png', porsrc: './images/god-portraits/Izanami.jpg', pantheon: 'Japanese', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 41, name: 'Janus', src: './images/god-icons/Janus.png', porsrc: './images/god-portraits/Janus.jpg', pantheon: 'Roman', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 42, name: 'Jing Wei', src: './images/god-icons/JingWei.png', porsrc: './images/god-portraits/JingWei.jpg', pantheon: 'Chinese', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 43, name: 'Kali', src: './images/god-icons/Kali.png', porsrc: './images/god-portraits/Kali.jpg', pantheon: 'Hindu', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 44, name: 'Khepri', src: './images/god-icons/Khepri.png', porsrc: './images/god-portraits/Khepri.jpg', pantheon: 'Egyptian', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 45, name: 'Kukulkan', src: './images/god-icons/Kukulkan.png', porsrc: './images/god-portraits/Kukulkan.jpg', pantheon: 'Mayan', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 46, name: 'Kumbhakarna', src: './images/god-icons/Kumbhakarna.png', porsrc: './images/god-portraits/Kumbhakarna.jpg', pantheon: 'Hindu', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 47, name: 'Kuzenbo', src: './images/god-icons/Kuzenbo.png', porsrc: './images/god-portraits/Kuzenbo.jpg', pantheon: 'Japanese', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},					
					{id: 48, name: 'Loki', src: './images/god-icons/Loki.png', porsrc: './images/god-portraits/Loki.jpg', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 49, name: 'Medusa', src: './images/god-icons/Medusa.png', porsrc: './images/god-portraits/Medusa.jpg', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 50, name: 'Mercury', src: './images/god-icons/Mercury.png', porsrc: './images/god-portraits/Mercury.jpg', pantheon: 'Roman', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 51, name: 'Neith', src: './images/god-icons/Neith.png', porsrc: './images/god-portraits/Neith.jpg', pantheon: 'Egyptian', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 52, name: 'Nemesis', src: './images/god-icons/Nemesis.png', porsrc: './images/god-portraits/Nemesis.jpg', pantheon: 'Greek', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 53, name: 'Ne Zha', src: './images/god-icons/NeZha.png', porsrc: './images/god-portraits/NeZha.jpg', pantheon: 'Chinese', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 54, name: 'Nike', src: './images/god-icons/Nike.png', porsrc: './images/god-portraits/Nike.jpg', pantheon: 'Greek', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},					
					{id: 55, name: 'Nox', src: './images/god-icons/Nox.png', porsrc: './images/god-portraits/Nox.jpg', pantheon: 'Roman', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 56, name: 'Nu Wa', src: './images/god-icons/NuWa.png', porsrc: './images/god-portraits/NuWa.jpg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 57, name: 'Odin', src: './images/god-icons/Odin.png', porsrc: './images/god-portraits/Odin.jpg', pantheon: 'Norse', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 58, name: 'Osiris', src: './images/god-icons/Osiris.png', porsrc: './images/god-portraits/Osiris.jpg', pantheon: 'Egyptian', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 59, name: 'Poseidon', src: './images/god-icons/Poseidon.png', porsrc: './images/god-portraits/Poseidon.jpg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 60, name: 'Ra', src: './images/god-icons/Ra.png', porsrc: './images/god-portraits/Ra.jpg', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 61, name: 'Raijin', src: './images/god-icons/Raijin.png', porsrc: './images/god-portraits/Raijin.jpg', pantheon: 'Japanese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 62, name: 'Rama', src: './images/god-icons/Rama.png', porsrc: './images/god-portraits/Rama.jpg', pantheon: 'Hindu', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 63, name: 'Ratatoskr', src: './images/god-icons/Ratatoskr.png', porsrc: './images/god-portraits/Ratatoskr.jpg', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 64, name: 'Ravana', src: './images/god-icons/Ravana.png', porsrc: './images/god-portraits/Ravana.jpg', pantheon: 'Hindu', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 65, name: 'Scylla', src: './images/god-icons/Scylla.png', porsrc: './images/god-portraits/Scylla.jpg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 66, name: 'Serquet', src: './images/god-icons/Serquet.png', porsrc: './images/god-portraits/Serquet.jpg', pantheon: 'Egyptian', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 67, name: 'Skadi', src: './images/god-icons/Skadi.png', porsrc: './images/god-portraits/Skadi.jpg', pantheon: 'Norse', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 68, name: 'Sobek', src: './images/god-icons/Sobek.png', porsrc: './images/god-portraits/Sobek.jpg', pantheon: 'Egyptian', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 69, name: 'Sol', src: './images/god-icons/Sol.png', porsrc: './images/god-portraits/Sol.jpg', pantheon: 'Norse', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 70, name: 'Sun Wukong', src: './images/god-icons/SunWukong.png', porsrc: './images/god-portraits/SunWukong.jpg', pantheon: 'Chinese', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 71, name: 'Susano', src: './images/god-icons/Susano.png', porsrc: './images/god-portraits/Susano.jpg', pantheon: 'Japanese', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 72, name: 'Sylvanus', src: './images/god-icons/Sylvanus.png', porsrc: './images/god-portraits/Sylvanus.jpg', pantheon: 'Roman', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 73, name: 'Terra', src: './images/god-icons/Terra.png', porsrc: './images/god-portraits/Terra.jpg', pantheon: 'Roman', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 74, name: 'Thanatos', src: './images/god-icons/Thanatos.png', porsrc: './images/god-portraits/Thanatos.jpg', pantheon: 'Greek', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 75, name: 'The Morrigan', src: './images/god-icons/TheMorrigan.png', porsrc: './images/god-portraits/TheMorrigan.jpg', pantheon: 'Celtic', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},					
					{id: 76, name: 'Thor', src: './images/god-icons/Thor.png', porsrc: './images/god-portraits/Thor.jpg', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 77, name: 'Thoth', src: './images/god-icons/Thoth.png', porsrc: './images/god-portraits/Thoth.jpg', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 78, name: 'Tyr', src: './images/god-icons/Tyr.png', porsrc: './images/god-portraits/Tyr.jpg', pantheon: 'Norse', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 79, name: 'Ullr', src: './images/god-icons/Ullr.png', porsrc: './images/god-portraits/Ullr.jpg', pantheon: 'Norse', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 80, name: 'Vamana', src: './images/god-icons/Vamana.png', porsrc: './images/god-portraits/Vamana.jpg', pantheon: 'Hindu', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 81, name: 'Vulcan', src: './images/god-icons/Vulcan.png', porsrc: './images/god-portraits/Vulcan.jpg', pantheon: 'Roman', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 82, name: 'Xabalanque', src: './images/god-icons/Xabalanque.png', porsrc: './images/god-portraits/Xabalanque.jpg', pantheon: 'Mayan', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 83, name: 'Xing Tian', src: './images/god-icons/XingTian.png', porsrc: './images/god-portraits/XingTian.jpg', pantheon: 'Chinese', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 84, name: 'Ymir', src: './images/god-icons/Ymir.png', porsrc: './images/god-portraits/Ymir.jpg', pantheon: 'Norse', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 85, name: 'Zeus', src: './images/god-icons/Zeus.png', porsrc: './images/god-portraits/Zeus.jpg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 86, name: 'Zhong Kui', src: './images/god-icons/ZhongKui.png', porsrc: './images/god-portraits/ZhongKui.jpg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
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
		var pushSelectedGods = {names: [], porsrc: []};
		this.setState({selectedGods : this.state.gods.map((godselect) => {
			if(godselect.isSelected === true){
                pushSelectedGods.names.push(godselect.name); 
				pushSelectedGods.porsrc.push(godselect.porsrc); 
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
				godEverythingChange.pictureClassName = "God-picture-div green";
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