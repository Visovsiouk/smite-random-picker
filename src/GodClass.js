import React from 'react';

class GodClass extends React.Component {
	constructor(props) {
		super(props);
			this.state = { 
				godclass: "All"
			};
		this.godclassChange = this.godclassChange.bind(this);
	}
	godclassChange(a) {
		var godclass = a.target.value;
		this.props.onChange(godclass);
	}
	render() {
		return (
			<div className="Changes">
				<h3>
					Class
				</h3>
				<select 
					id="Change-godclass" 
					onChange={this.godclassChange} >
					<option value="All">All</option>
					<option value="Assassin">Assassin</option>				  
					<option value="Guardian">Guardian</option>
					<option value="Hunter">Hunter</option>
					<option value="Mage">Mage</option>
					<option value="Warrior">Warrior</option>				  
				</select>
			</div>
		);
	}
}

export default GodClass;