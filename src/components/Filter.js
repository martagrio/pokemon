import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
	const {getUserQuery, query} = props;
	return(
	<div className="app__filter">
		<input type="text" onChange = {getUserQuery} value={query} />
	</div>	
	);
}

Filter.propTypes = {
	getUserQuery: PropTypes.func.isRequired,
	query: PropTypes.string.isRequired
}

export default Filter;