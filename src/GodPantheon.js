import React from 'react';

class GodPantheon extends React.Component {
	constructor(props) {
		super(props);
			this.state = { 
				pantheon: 'All'
			};
		this.pantheonChange = this.pantheonChange.bind(this);
	}
	pantheonChange(a) {
		var pantheon = a.target.value;
		this.props.onChange(pantheon);
	}
	render() {
		return (
			<div className="Changes">
				<h3>
					Pantheon
				</h3>
				<select 
					id="Change-pantheon" 
					ref="Change-pantheon"
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