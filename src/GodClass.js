var React = require('react');

var GodClass = React.createClass({
	godclassChange: function (a) {
		var godclass = a.target.value;
		this.props.onChange(godclass);
	},
	render: function () {
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
});

module.exports = GodClass;