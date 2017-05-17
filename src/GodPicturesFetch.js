import React from 'react';
import { connect } from 'react-redux'
import { Col, Row, Button } from 'react-bootstrap';
import GodPantheon  from'./GodPantheon';
import GodClass  from'./GodClass';
import GodPicture from './GodPicture';
import GodButtonReset from './GodButtonReset';
import GodButtonExtermination from './GodButtonExtermination';

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
				gods: [],
			};
		this.runRandomize = this.runRandomize.bind(this);
		this.changePantheon = this.changePantheon.bind(this);
		this.changeGodclass = this.changeGodclass.bind(this);
		this.changeBoth = this.changeBoth.bind(this);
		this.handleButtonclick = this.handleButtonclick.bind(this);
		this.populateFromLocalStorage = this.populateFromLocalStorage.bind(this);
		this.exterminateGod = this.exterminateGod.bind(this);
		this.addToLocalhost = this.addToLocalhost.bind(this); 
	}
	componentDidMount() {
		if (localStorage.getItem("gods") !== null) {
			this.populateFromLocalStorage();
		} else {
			var allgods = [
					{id: 1, name: 'Agni', src: './images/god-icons/Agni.png', porsrc: './images/god-portraits/Agni.jpg', selsrc: './sound/select/Agni.ogg', pantheon: 'Hindu', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 2, name: 'Ah Muzen Cab', src: './images/god-icons/AMC.png', porsrc: './images/god-portraits/AMC.jpg', selsrc: './sound/select/AMC.ogg', pantheon: 'Mayan', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 3, name: 'Ah Puch', src: './images/god-icons/AhPuch.png', porsrc: './images/god-portraits/AhPuch.jpg', selsrc: './sound/select/AhPuch.ogg', pantheon: 'Mayan', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 4, name: 'Amaterasu', src: './images/god-icons/Amaterasu.png', porsrc: './images/god-portraits/Amaterasu.jpg', selsrc: './sound/select/Amaterasu.ogg', pantheon: 'Japanese', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 5, name: 'Anhur', src: './images/god-icons/Anhur.png', porsrc: './images/god-portraits/Anhur.jpg', selsrc: './sound/select/Anhur.ogg', pantheon: 'Egyptian', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 6, name: 'Anubis', src: './images/god-icons/Anubis.png', porsrc: './images/god-portraits/Anubis.jpg', selsrc: './sound/select/Anubis.ogg', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 7, name: 'Ao Kuang', src: './images/god-icons/AoKuang.png', porsrc: './images/god-portraits/AoKuang.jpg', selsrc: './sound/select/AoKuang.ogg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 8, name: 'Aphrodite', src: './images/god-icons/Aphrodite.png', porsrc: './images/god-portraits/Aphrodite.jpg', selsrc: './sound/select/Aphrodite.ogg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 9, name: 'Apollo', src: './images/god-icons/Apollo.png', porsrc: './images/god-portraits/Apollo.jpg', selsrc: './sound/select/Apollo.ogg', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 10, name: 'Arachne', src: './images/god-icons/Arachne.png', porsrc: './images/god-portraits/Arachne.jpg', selsrc: './sound/select/Arachne.ogg', pantheon: 'Greek', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 11, name: 'Ares', src: './images/god-icons/Ares.png', porsrc: './images/god-portraits/Ares.jpg', selsrc: './sound/select/Ares.ogg', pantheon: 'Greek', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 12, name: 'Artemis', src: './images/god-icons/Artemis.png', porsrc: './images/god-portraits/Artemis.jpg', selsrc: './sound/select/Artemis.ogg', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 13, name: 'Athena', src: './images/god-icons/Athena.png', porsrc: './images/god-portraits/Athena.jpg', selsrc: './sound/select/Athena.ogg', pantheon: 'Greek', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 14, name: 'Awilix', src: './images/god-icons/Awilix.png', porsrc: './images/god-portraits/Awilix.jpg', selsrc: './sound/select/Awilix.ogg', pantheon: 'Mayan', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 15, name: 'Bacchus', src: './images/god-icons/Bacchus.png', porsrc: './images/god-portraits/Bacchus.jpg', selsrc: './sound/select/Bacchus.ogg', pantheon: 'Roman', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 16, name: 'Bakasura', src: './images/god-icons/Bakasura.png', porsrc: './images/god-portraits/Bakasura.jpg', selsrc: './sound/select/Bakasura.ogg', pantheon: 'Hindu', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 17, name: 'Bastet', src: './images/god-icons/Bastet.png', porsrc: './images/god-portraits/Bastet.jpg', selsrc: './sound/select/Bastet.ogg', pantheon: 'Egyptian', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 18, name: 'Bellona', src: './images/god-icons/Bellona.png', porsrc: './images/god-portraits/Bellona.jpg', selsrc: './sound/select/Bellona.ogg', pantheon: 'Roman', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 19, name: 'Cabrakan', src: './images/god-icons/Cabrakan.png', porsrc: './images/god-portraits/Cabrakan.jpg', selsrc: './sound/select/Cabrakan.ogg', pantheon: 'Mayan', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 20, name: 'Camazotz', src: './images/god-icons/Camazotz.png', porsrc: './images/god-portraits/Camazotz.jpg', selsrc: './sound/select/Camazotz.ogg', pantheon: 'Mayan', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 21, name: 'Cernunnos', src: './images/god-icons/Cernunnos.png', porsrc: './images/god-portraits/Cernunnos.jpg', selsrc: './sound/select/Cernunnos.ogg', pantheon: 'Celtic', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 22, name: 'Chaac', src: './images/god-icons/Chaac.png', porsrc: './images/god-portraits/Chaac.jpg', selsrc: './sound/select/Chaac.ogg', pantheon: 'Mayan', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 23, name: "Chang'e", src: './images/god-icons/Change.png', porsrc: './images/god-portraits/Change.jpg', selsrc: './sound/select/Change.ogg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 24, name: 'Chiron', src: './images/god-icons/Chiron.png', porsrc: './images/god-portraits/Chiron.jpg', selsrc: './sound/select/Chiron.ogg', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 25, name: 'Chronos', src: './images/god-icons/Chronos.png', porsrc: './images/god-portraits/Chronos.jpg', selsrc: './sound/select/Chronos.ogg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 26, name: 'Cupid', src: './images/god-icons/Cupid.png', porsrc: './images/god-portraits/Cupid.jpg', selsrc: './sound/select/Cupid.ogg', pantheon: 'Roman', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 27, name: 'Erlang Shen', src: './images/god-icons/ErlangShen.png', porsrc: './images/god-portraits/ErlangShen.jpg', selsrc: './sound/select/ErlangShen.ogg', pantheon: 'Chinese', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 28, name: 'Fafnir', src: './images/god-icons/Fafnir.png', porsrc: './images/god-portraits/Fafnir.jpg', selsrc: './sound/select/Fafnir.ogg', pantheon: 'Norse', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 29, name: 'Fenrir', src: './images/god-icons/Fenrir.png', porsrc: './images/god-portraits/Fenrir.jpg', selsrc: './sound/select/Fenrir.ogg', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 30, name: 'Freya', src: './images/god-icons/Freya.png', porsrc: './images/god-portraits/Freya.jpg', selsrc: './sound/select/Freya.ogg', pantheon: 'Norse', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 31, name: 'Ganesha', src: './images/god-icons/Ganesha.png', porsrc: './images/god-portraits/Ganesha.jpg', selsrc: './sound/select/Ganesha.ogg', pantheon: 'Hindu', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 32, name: 'Geb', src: './images/god-icons/Geb.png', porsrc: './images/god-portraits/Geb.jpg', selsrc: './sound/select/Geb.ogg', pantheon: 'Egyptian', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 33, name: 'Guan Yu', src: './images/god-icons/GuanYu.png', porsrc: './images/god-portraits/GuanYu.jpg', selsrc: './sound/select/GuanYu.ogg', pantheon: 'Chinese', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 34, name: 'Hades', src: './images/god-icons/Hades.png', porsrc: './images/god-portraits/Hades.jpg', selsrc: './sound/select/Hades.ogg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 35, name: 'He Bo', src: './images/god-icons/HeBo.png', porsrc: './images/god-portraits/HeBo.jpg', selsrc: './sound/select/HeBo.ogg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 36, name: 'Hel', src: './images/god-icons/Hel.png', porsrc: './images/god-portraits/Hel.jpg', selsrc: './sound/select/Hel.ogg', pantheon: 'Norse', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 37, name: 'Hercules', src: './images/god-icons/Hercules.png', porsrc: './images/god-portraits/Hercules.jpg', selsrc: './sound/select/Hercules.ogg', pantheon: 'Greek', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 38, name: 'Hou Yi', src: './images/god-icons/HouYi.png', porsrc: './images/god-portraits/HouYi.jpg', selsrc: './sound/select/HouYi.ogg', pantheon: 'Chinese', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 39, name: 'Hun Batz', src: './images/god-icons/HunBatz.png', porsrc: './images/god-portraits/HunBatz.jpg', selsrc: './sound/select/HunBatz.ogg', pantheon: 'Mayan', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 40, name: 'Isis', src: './images/god-icons/Isis.png', porsrc: './images/god-portraits/Isis.jpg', selsrc: './sound/select/Isis.ogg', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 41, name: 'Izanami', src: './images/god-icons/Izanami.png', porsrc: './images/god-portraits/Izanami.jpg', selsrc: './sound/select/Izanami.ogg', pantheon: 'Japanese', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 42, name: 'Janus', src: './images/god-icons/Janus.png', porsrc: './images/god-portraits/Janus.jpg', selsrc: './sound/select/Janus.ogg', pantheon: 'Roman', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 43, name: 'Jing Wei', src: './images/god-icons/JingWei.png', porsrc: './images/god-portraits/JingWei.jpg', selsrc: './sound/select/JingWei.ogg', pantheon: 'Chinese', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 44, name: 'Kali', src: './images/god-icons/Kali.png', porsrc: './images/god-portraits/Kali.jpg', selsrc: './sound/select/Kali.ogg', pantheon: 'Hindu', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 45, name: 'Khepri', src: './images/god-icons/Khepri.png', porsrc: './images/god-portraits/Khepri.jpg', selsrc: './sound/select/Khepri.ogg', pantheon: 'Egyptian', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 46, name: 'Kukulkan', src: './images/god-icons/Kukulkan.png', porsrc: './images/god-portraits/Kukulkan.jpg', selsrc: './sound/select/Kukulkan.ogg', pantheon: 'Mayan', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 47, name: 'Kumbhakarna', src: './images/god-icons/Kumbhakarna.png', porsrc: './images/god-portraits/Kumbhakarna.jpg', selsrc: './sound/select/Kumbhakarna.ogg', pantheon: 'Hindu', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 48, name: 'Kuzenbo', src: './images/god-icons/Kuzenbo.png', porsrc: './images/god-portraits/Kuzenbo.jpg', selsrc: './sound/select/Kuzenbo.ogg', pantheon: 'Japanese', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},					
					{id: 49, name: 'Loki', src: './images/god-icons/Loki.png', porsrc: './images/god-portraits/Loki.jpg', selsrc: './sound/select/Loki.ogg', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 50, name: 'Medusa', src: './images/god-icons/Medusa.png', porsrc: './images/god-portraits/Medusa.jpg', selsrc: './sound/select/Medusa.ogg', pantheon: 'Greek', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 51, name: 'Mercury', src: './images/god-icons/Mercury.png', porsrc: './images/god-portraits/Mercury.jpg', selsrc: './sound/select/Mercury.ogg', pantheon: 'Roman', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 52, name: 'Neith', src: './images/god-icons/Neith.png', porsrc: './images/god-portraits/Neith.jpg', selsrc: './sound/select/Neith.ogg', pantheon: 'Egyptian', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 53, name: 'Nemesis', src: './images/god-icons/Nemesis.png', porsrc: './images/god-portraits/Nemesis.jpg', selsrc: './sound/select/Nemesis.ogg', pantheon: 'Greek', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 54, name: 'Ne Zha', src: './images/god-icons/NeZha.png', porsrc: './images/god-portraits/NeZha.jpg', selsrc: './sound/select/NeZha.ogg', pantheon: 'Chinese', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 55, name: 'Nike', src: './images/god-icons/Nike.png', porsrc: './images/god-portraits/Nike.jpg', selsrc: './sound/select/Nike.ogg', pantheon: 'Greek', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},					
					{id: 56, name: 'Nox', src: './images/god-icons/Nox.png', porsrc: './images/god-portraits/Nox.jpg', selsrc: './sound/select/Nox.ogg', pantheon: 'Roman', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 57, name: 'Nu Wa', src: './images/god-icons/NuWa.png', porsrc: './images/god-portraits/NuWa.jpg', selsrc: './sound/select/NuWa.ogg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 58, name: 'Odin', src: './images/god-icons/Odin.png', porsrc: './images/god-portraits/Odin.jpg', selsrc: './sound/select/Odin.ogg', pantheon: 'Norse', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 59, name: 'Osiris', src: './images/god-icons/Osiris.png', porsrc: './images/god-portraits/Osiris.jpg', selsrc: './sound/select/Osiris.ogg', pantheon: 'Egyptian', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 60, name: 'Poseidon', src: './images/god-icons/Poseidon.png', porsrc: './images/god-portraits/Poseidon.jpg', selsrc: './sound/select/Poseidon.ogg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 61, name: 'Ra', src: './images/god-icons/Ra.png', porsrc: './images/god-portraits/Ra.jpg', selsrc: './sound/select/Ra.ogg', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 62, name: 'Raijin', src: './images/god-icons/Raijin.png', porsrc: './images/god-portraits/Raijin.jpg', selsrc: './sound/select/Raijin.ogg', pantheon: 'Japanese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 63, name: 'Rama', src: './images/god-icons/Rama.png', porsrc: './images/god-portraits/Rama.jpg', selsrc: './sound/select/Rama.ogg', pantheon: 'Hindu', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 64, name: 'Ratatoskr', src: './images/god-icons/Ratatoskr.png', porsrc: './images/god-portraits/Ratatoskr.jpg', selsrc: './sound/select/Ratatoskr.ogg', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 65, name: 'Ravana', src: './images/god-icons/Ravana.png', porsrc: './images/god-portraits/Ravana.jpg', selsrc: './sound/select/Ravana.ogg', pantheon: 'Hindu', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 66, name: 'Scylla', src: './images/god-icons/Scylla.png', porsrc: './images/god-portraits/Scylla.jpg', selsrc: './sound/select/Scylla.ogg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 67, name: 'Serquet', src: './images/god-icons/Serquet.png', porsrc: './images/god-portraits/Serquet.jpg', selsrc: './sound/select/Serquet.ogg', pantheon: 'Egyptian', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 68, name: 'Skadi', src: './images/god-icons/Skadi.png', porsrc: './images/god-portraits/Skadi.jpg', selsrc: './sound/select/Skadi.ogg', pantheon: 'Norse', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 69, name: 'Sobek', src: './images/god-icons/Sobek.png', porsrc: './images/god-portraits/Sobek.jpg', selsrc: './sound/select/Sobek.ogg', pantheon: 'Egyptian', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 70, name: 'Sol', src: './images/god-icons/Sol.png', porsrc: './images/god-portraits/Sol.jpg', selsrc: './sound/select/Sol.ogg', pantheon: 'Norse', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 71, name: 'Sun Wukong', src: './images/god-icons/SunWukong.png', porsrc: './images/god-portraits/SunWukong.jpg', selsrc: './sound/select/SunWukong.ogg', pantheon: 'Chinese', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 72, name: 'Susano', src: './images/god-icons/Susano.png', porsrc: './images/god-portraits/Susano.jpg', selsrc: './sound/select/Susano.ogg', pantheon: 'Japanese', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 73, name: 'Sylvanus', src: './images/god-icons/Sylvanus.png', porsrc: './images/god-portraits/Sylvanus.jpg', selsrc: './sound/select/Sylvanus.ogg', pantheon: 'Roman', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 74, name: 'Terra', src: './images/god-icons/Terra.png', porsrc: './images/god-portraits/Terra.jpg', selsrc: './sound/select/Terra.ogg', pantheon: 'Roman', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 75, name: 'Thanatos', src: './images/god-icons/Thanatos.png', porsrc: './images/god-portraits/Thanatos.jpg', selsrc: './sound/select/Thanatos.ogg', pantheon: 'Greek', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 76, name: 'The Morrigan', src: './images/god-icons/TheMorrigan.png', porsrc: './images/god-portraits/TheMorrigan.jpg', selsrc: './sound/select/TheMorrigan.ogg', pantheon: 'Celtic', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},					
					{id: 77, name: 'Thor', src: './images/god-icons/Thor.png', porsrc: './images/god-portraits/Thor.jpg', selsrc: './sound/select/Thor.ogg', pantheon: 'Norse', godclass: 'Assassin', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 78, name: 'Thoth', src: './images/god-icons/Thoth.png', porsrc: './images/god-portraits/Thoth.jpg', selsrc: './sound/select/Thoth.ogg', pantheon: 'Egyptian', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 79, name: 'Tyr', src: './images/god-icons/Tyr.png', porsrc: './images/god-portraits/Tyr.jpg', selsrc: './sound/select/Tyr.ogg', pantheon: 'Norse', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 80, name: 'Ullr', src: './images/god-icons/Ullr.png', porsrc: './images/god-portraits/Ullr.jpg', selsrc: './sound/select/Ullr.ogg', pantheon: 'Norse', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 81, name: 'Vamana', src: './images/god-icons/Vamana.png', porsrc: './images/god-portraits/Vamana.jpg', selsrc: './sound/select/Vamana.ogg', pantheon: 'Hindu', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 82, name: 'Vulcan', src: './images/god-icons/Vulcan.png', porsrc: './images/god-portraits/Vulcan.jpg', selsrc: './sound/select/Vulcan.ogg', pantheon: 'Roman', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 83, name: 'Xbalanque', src: './images/god-icons/Xbalanque.png', porsrc: './images/god-portraits/Xbalanque.jpg', selsrc: './sound/select/Xbalanque.ogg', pantheon: 'Mayan', godclass: 'Hunter', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 84, name: 'Xing Tian', src: './images/god-icons/XingTian.png', porsrc: './images/god-portraits/XingTian.jpg', selsrc: './sound/select/XingTian.ogg', pantheon: 'Chinese', godclass: 'Guardian', isSelected: true, pictureClassName: "God-picture-div green"},				
					{id: 85, name: 'Ymir', src: './images/god-icons/Ymir.png', porsrc: './images/god-portraits/Ymir.jpg', selsrc: './sound/select/Ymir.ogg', pantheon: 'Norse', godclass: 'Warrior', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 86, name: 'Zeus', src: './images/god-icons/Zeus.png', porsrc: './images/god-portraits/Zeus.jpg', selsrc: './sound/select/Zeus.ogg', pantheon: 'Greek', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"},
					{id: 87, name: 'Zhong Kui', src: './images/god-icons/ZhongKui.png', porsrc: './images/god-portraits/ZhongKui.jpg', selsrc: './sound/select/ZhongKui.ogg', pantheon: 'Chinese', godclass: 'Mage', isSelected: true, pictureClassName: "God-picture-div green"}
			]
			this.setState((prevState) => ({
				gods: prevState.gods.concat(allgods),
				pantheon: 'All',
				godclass: 'All'
			}));
		}
	}
	componentWillReceiveProps(nextProps){
		var shouldExterminate = JSON.parse(localStorage.getItem('extermination'));
     	if(nextProps.selectedGod.selectedGod.name !== this.props.selectedGod.selectedGod.name){
			 if (shouldExterminate === true) {
				this.exterminateGod(nextProps.selectedGod.selectedGod.name);
			}
		 } else {
			 this.addToLocalhost();
		 }
  	}
	populateFromLocalStorage() {
		var savedgods = JSON.parse(localStorage.getItem('gods'));
		var localpantheon = JSON.parse(localStorage.getItem('pantheon'));
		var localgodclass = JSON.parse(localStorage.getItem('godclass'));
		this.setState({
			gods: this.state.gods.concat(savedgods),
			pantheon: localpantheon,
			godclass: localgodclass
		})
	}
	runRandomize(push) {
		var pushSelectedGods = {names: [], porsrc: [], selsrc: []};
		this.setState({selectedGods : this.state.gods.map((godselect) => {
			if(godselect.isSelected === true){
                pushSelectedGods.names.push(godselect.name); 
				pushSelectedGods.porsrc.push(godselect.porsrc); 
				pushSelectedGods.selsrc.push(godselect.selsrc); 
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
	exterminateGod(godToExterminate) {
		this.setState({
			gods : this.state.gods.map((extgod) => {
			if(extgod.name === godToExterminate){
                if(extgod.isSelected){
                	extgod.isSelected = false;
                   	extgod.pictureClassName = "God-picture-div none";
                }
            }
            return extgod;
		})})
		this.addToLocalhost();
	}
	addToLocalhost() {
		localStorage.setItem('gods', JSON.stringify(this.state.gods));
		localStorage.setItem('pantheon', JSON.stringify(this.state.pantheon));
		localStorage.setItem('godclass', JSON.stringify(this.state.godclass));
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
					<GodButtonExtermination />
					<GodButtonReset	
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

GodPicturesFetch = connect((store) => {
	return {
		selectedGod: store.selectedGod
	};
})(GodPicturesFetch)

export default GodPicturesFetch;