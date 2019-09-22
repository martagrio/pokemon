import React from 'react';
import PropTypes from 'prop-types';
import PokeCard from './PokeCard';

const PokeList = props => {
	const {pokemons} = props;
	return (
		<ul className="pokemon__list">
			{pokemons.map(pokemon => {
				return (
					<li className="pokemon" key={pokemon.id}> 
						<PokeCard 
							name = {pokemon.name}
							url = {pokemon.url}
						/>
					</li>
				);
			})}
		</ul>
	);
};

PokeList.propTypes = {
	pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PokeList;