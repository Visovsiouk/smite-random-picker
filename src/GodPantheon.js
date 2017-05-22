import React from 'react';

class GodPantheon extends React.Component {
	constructor(props) {
		super(props);
			this.state = { 
				pantheon: []
			};
		this.pantheonChange = this.pantheonChange.bind(this);
	}
	pantheonChange(a) {
		var pantheon = a.target.value;
		this.props.onChange(pantheon);
	}
	componentWillMount() {
		if (localStorage.getItem("pantheon") !== 'All') {
			var localpantheon = JSON.parse(localStorage.getItem('pantheon'));
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
			<div className="Changes">
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
						<option value="Roman">Roman</option>				  
				</select>
			</div>
		);
	}
}

export default GodPantheon;