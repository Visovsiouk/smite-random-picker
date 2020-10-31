import React from 'react';
import { connect } from 'react-redux'
import { Col, Row, Button } from 'react-bootstrap';
import sortBy from 'lodash/sortBy';
import GodPantheon from './GodPantheon';
import GodClass from './GodClass';
import GodPicture from './GodPicture';
import GodButtonReset from './GodButtonReset';
import GodButtonExtermination from './GodButtonExtermination';
import db from "./components/firebase";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
			nav: '',
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
		/*Array of objects containing gods' names, src for thumbnail, src for portrait, sound src, pantheon, godclass and wether they are selected or not*/

		db.collection("gods").get().then( gods => {
			this.setState({
				gods: gods.docs.map((doc, index) => {
					var god = doc.data();
					god.id = index;
					god.name = doc.id;
					god.isSelected = true;
					return god;
				})
			})
		}) 

		this.setState((prevState) => ({
			pantheon: 'All',
			godclass: 'All'
		}));
	}
	/*Mehod to push the currently selected gods to App and it will be subsequently pushed to GodsNamesFetch to be shuffled */
	runRandomize(push) {
		var pushSelectedGods = { names: [], porsrc: [], selsrc: [] };
		this.setState({
			selectedGods: this.state.gods.map((godselect) => {
				if (godselect.isSelected === true) {
					pushSelectedGods.names.push(godselect.name);
					pushSelectedGods.porsrc.push('./images/god-portraits/' + godselect.ref_name + '.jpg');
					pushSelectedGods.selsrc.push('./sound/select/' + godselect.ref_name + '.ogg');
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
			selectedGods: this.state.gods.map((god) => {
				(god.pantheon === newPantheon || newPantheon === 'All') && ( god.godclass === godclass || godclass === 'All') === true ? god.isSelected = true : god.isSelected = false;
				return god
			})
		});
	}
	/*Method that handles changes when another godclass is selected*/
	changeGodclass(newGodclass) {
		var pantheon = this.state.pantheon;
		this.setState({
			godclass: newGodclass,
			selectedGods: this.state.gods.map((god) => {
				(god.godclass === newGodclass || newGodclass === 'All') && ( god.pantheon === pantheon || pantheon === 'All') === true ? god.isSelected = true : god.isSelected = false;
				return god
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
							godsProfileChanged[i] = { id: currentGods[i].id, name: currentGods[i].name, src: currentGods[i].src, porsrc: currentGods[i].porsrc, selsrc: currentGods[i].selsrc, pantheon: currentGods[i].pantheon, godclass: currentGods[i].godclass, isSelected: true }
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
		var sortedGods = sortBy(this.state.gods, 'name');
		var gods = sortedGods.map((god, i) => {
			return (
				<div className="god-div" key={i} >
					<GodPicture
						name={god.name}
						ref_name={god.ref_name}
						godSelected={god.isSelected}
						onClick={this.handlePictureClick.bind(this, god)}
					/>
				</div>
			);
		})
		return (
			<div id="gods-megacontainer" className={this.state.nav}>
				<div className="gods-container">
					<Router>
						<Col className="options-section" xs={12} md={3}>
							<h2>Welcome to SMITE Randomizer</h2>
							<Link to="/admin"><Button className="button-randomize hidden-xs hidden-sm" bsStyle="primary" bsSize="large" block>Home</Button></Link>
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
							{/* <GodProfile
								onClick={this.handleProfileClick}
							/> */}
						</Col>
						<Switch>
							<Route exact path="/">
								<Col className="gods-section" xs={12} md={9}>
									<Col className="nav-menu-buttons" xs={12} mdHidden lgHidden>
										<i onClick={this.showMenu} className="material-icons">menu</i>
										<Button className="button-randomize" onClick={this.runRandomize} bsStyle="primary" bsSize="large" block>Spin the Wheel of Fortune</Button>
									</Col>
									<div className="god-container">{gods}</div>
								</Col>
							</Route>
							<Route exact path="/admin">
								<Col className="gods-section" xs={12} md={9}>
									<h3>Admin</h3>
								</Col>
							</Route>
						</Switch>
					</Router>
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