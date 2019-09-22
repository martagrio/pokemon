import React from 'react';
import PropTypes from 'prop-types';
import '../css/Filter.css';

const Filter = props => {
	const {getUserQuery, query} = props;
	return(
	<div className="app__filter">
		<input
		className="app__input" 
			type="text" 
			onChange = {getUserQuery} 
			value={query}
			placeholder = "introduce el nombre de un pokemon" />
	</div>	
	);
}

Filter.propTypes = {
	getUserQuery: PropTypes.func.isRequired,
	query: PropTypes.string.isRequired
}

export default Filter;