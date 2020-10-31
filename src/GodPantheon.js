import React from 'react';
import { Col } from 'react-bootstrap';
import db from "./components/firebase";

/*"Pantheon" option component*/
class GodPantheon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pantheon: 'All',
			pantheons: []
		};
		this.pantheonChange = this.pantheonChange.bind(this);
	}
	/*Event that passes the selected pantheon to GodsPicturesFetch*/
	pantheonChange(a) {
		var pantheon = a.target.value;
		this.props.onChange(pantheon);
	}
	/*Checking localstorage if the pantheon@app key is set and setting the state accordingly*/
	componentWillMount() {
		if (localStorage.getItem("pantheon@app") !== 'All') {
			var localpantheon = JSON.parse(localStorage.getItem('pantheon@app'));
			this.setState({
				pantheon: localpantheon
			})
		}
		
		db.collection("pantheons").get().then( pantheons => {
			this.setState({
				pantheons: pantheons.docs.map(doc => doc.id)
			}) 
		});
	}
	render() {
		return (
			<Col xs={12} md={6}>
				<div className="changes">
					<h3>
						Pantheon
					</h3>
					<select
						value={this.props.pantheon}
						id="change-pantheon"
						onChange={this.pantheonChange}>
						<option value="All">All</option>
						{this.state.pantheons.map((pantheon) => {
							return <option key={pantheon} value={pantheon}>{pantheon}</option>;
						})}
					</select>
				</div>
			</Col>
		);
	}
}

export default GodPantheon;