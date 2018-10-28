import React from 'react';
import { Col } from 'react-bootstrap';

/*"Pantheon" option component*/
class GodPantheon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pantheon: []
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
		} else {
			this.setState({
				pantheon: 'All'
			})
		}
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
						<option value="Chinese">Chinese</option>
						<option value="Egyptian">Egyptian</option>
						<option value="Greek">Greek</option>
						<option value="Hindu">Hindu</option>
						<option value="Japanese">Japanese</option>
						<option value="Mayan">Mayan</option>
						<option value="Norse">Norse</option>
						<option value="Polynesian">Roman</option>
						<option value="Slavic">Roman</option>
						<option value="Roman">Roman</option>
						<option value="Voodoo">Roman</option>
					</select>
				</div>
			</Col>
		);
	}
}

export default GodPantheon;