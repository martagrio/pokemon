import React from 'react';
import PropTypes from 'prop-types';
import PokeCard from './PokeCard';
import {Link} from 'react-router-dom';

const PokeList = props => {
	const {pokemons, query} = props;
	return (
		<ul className="pokemon__list">
			{pokemons
				.filter(searched => searched.name.toLowerCase().includes(query.toLowerCase()))
				.map(pokemon => {
					//El link se le pone dentro del div, no del li.
					return (
						<li className="pokemon" key={pokemon.id}>
							<Link to ="/detail" className="pokemon__link">
								<PokeCard 
									name = {pokemon.name}
									url = {pokemon.url}
								/>
							</Link> 
						</li>
					);
				})}
		</ul>
	);
};

PokeList.propTypes = {
	pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
	query: PropTypes.string.isRequired
}

export default PokeList;
