import React from 'react';

class GodClass extends React.Component {
	constructor(props) {
		super(props);
			this.state = { 
				godclass: []
			};
		this.godclassChange = this.godclassChange.bind(this);
	}
	godclassChange(a) {
		var godclass = a.target.value;
		this.props.onChange(godclass);
	}
	componentWillMount() {
		if (localStorage.getItem("godclass") !== 'All') {
			var localgodclass = JSON.parse(localStorage.getItem('godclass'));
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
		);
	}
}

export default GodClass;