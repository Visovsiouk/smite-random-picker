var React = require('react');
var GodPicturesFetch = require('./GodPicturesFetch');

var GodPantheon = React.createClass({
	pantheonChange: function (e) {
		var pantheon = e.target.value;
		this.props.onChange(pantheon);
	},
	render: function () {
		return (
			<div>
				<h1>
					Hey my pantheon is {this.props.pantheon}!
				</h1>
				<select 
					id="great-pantheons" 
					onChange={this.pantheonChange} >
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
});

module.exports = GodPantheon;