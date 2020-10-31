import React from 'react';
import { Col } from 'react-bootstrap';
import db from "./components/firebase";

/*"Godclass" option component*/
class GodClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			godclass: 'All',
			classesList: []
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
		}

		db.collection("classes").get().then( classesList => {
			this.setState({
				classesList: classesList.docs.map(doc => doc.id)
			}) 
		});
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
						{this.state.classesList.map((singleClass) => {
							return <option key={singleClass} value={singleClass}>{singleClass}</option>;
						})}
					</select>
				</div>
			</Col>
		);
	}
}

export default GodClass;