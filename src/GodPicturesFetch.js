var React = require('react');
var GodPantheon = require('./GodPantheon');

var GodPicture = React.createClass({
	render: function () {
		return (
			<div className="God-picture-div">
				<img src={this.props.src} alt={this.props.pantheon} />
				<h6>{this.props.name}</h6>
			</div>
		)
	}
});

var GodPicturesFetch = React.createClass({
	getInitialState: function () {
		return { pantheon: 'All',  godclass: 'All', gods : [
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
			] };
	},
	changePantheon: function (newPantheon) {
		this.setState({
			pantheon: newPantheon
		});
	},
	render: function () {
		var currentPantheon = this.state.pantheon;
		var gods = this.state.gods.map(function(god, i){
			if ( currentPantheon === god.pantheon) {
				return (
				<div>
				<GodPicture 
					key={i} 
					name={god.name} 
					src={god.src}
				/>
				</div>
				);
			} else if (currentPantheon === 'All') {
				return (
				<div>
				<GodPicture 
					key={i} 
					name={god.name} 
					src={god.src}
				/>
				</div>
				);
			}
		})
		return (
		<div>
			<GodPantheon 
				pantheon={this.state.pantheon} 
				onChange={this.changePantheon} 
			/>
			<div className="God-container">{gods}</div>
		</div>
		);
	}	
});

module.exports = GodPicturesFetch;