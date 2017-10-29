import React from 'react';
import { Col } from 'react-bootstrap';

/*"Godclass" option component*/
class GodClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			godclass: []
		};
		this.godclassChange = this.godclassChange.bind(this);
	}
	/*Event that passes the selected class to GodsPicturesFetch*/
	godclassChange(a) {
		var godclass = a.target.value;
		this.props.onChange(godclass);
	}
	/*Checking localstorage if the godclass@app key is set and setting the state accordingly*/
	componentWillMount() {
		if (localStorage.getItem("godclass@app") !== 'All') {
			var localgodclass = JSON.parse(localStorage.getItem('godclass@app'));
			this.setState({
				godclass: localgodclass
			})
		} else {
			this.setState({
				godclass: 'All'
			})
		}
	}
	render() {
		return (
			<Col xs={12} md={6}>
				<div className="changes">
					<h3>
						Class
				</h3>
					<select
						value={this.props.godclass}
						id="change-godclass"
						onChange={this.godclassChange} >
						<option value="All">All</option>
						<option value="Assassin">Assassin</option>
						<option value="Guardian">Guardian</option>
						<option value="Hunter">Hunter</option>
						<option value="Mage">Mage</option>
						<option value="Warrior">Warrior</option>
					</select>
				</div>
			</Col>
		);
	}
}

export default GodClass;