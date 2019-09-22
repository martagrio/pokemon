import React, {Fragment} from 'react';
import PokeList from './PokeList';
import Filter from './Filter';
import PropTypes from 'prop-types';
import '../css/Home.css';

const Home = props => {
	const {getUserQuery, query, pokemons} = props;
	return(
		<Fragment>
			<h1 className="app__title">my list of pokemon</h1>
			<Filter 
				getUserQuery = {getUserQuery} 
				query = {query}
				/>
			<PokeList 
				pokemons = {pokemons}
				query = {query} 
			/>
		</Fragment>
	);
}

Home.propTypes = {
	getUserQuery: PropTypes.func.isRequired,
	query: PropTypes.string.isRequired,
	pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Home;			 