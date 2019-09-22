import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const PokeDetail = props => {
	const {routerProps, pokemons} = props;
	const pokeId = parseInt(routerProps.match.params.pokeId);

	const pokemon = pokemons.filter(item => item.id === pokeId);

	if (pokeId > pokemon.length) {
		return (
			<React.Fragment>
				<p className="error_message">no hay más pokemons, deja de buscar ya, pesao</p>
				<Link to ="/" className="app__go-back">volver al listado</Link>
			</React.Fragment>
		);
	}

	if (pokemon[0]) {
		const {name, url, types} = pokemon[0];
		return(
			<React.Fragment>
				<div className="detail">
					<h2 className="detail__name">{name}</h2>
					<div className="detail__img">
						<img src={url} alt={name} />
					</div>
					<ul className="detaul__types">
						{types.map((type, index) => {
							return (
								<li className="detail__type" key={index}>{type}</li>
							)
						})}
					</ul>
				</div>
				<Link to ="/" className="app__go-back">volver al listado</Link>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<p className="error__message">no está registrado ese pokemon</p>
				<Link to ="/" className="app__go-back">volver al listado</Link>
			</React.Fragment>
		);		
	}
}

PokeDetail.propTypes = {
	routerProps: PropTypes.object.isRequired,
	pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
}	

export default PokeDetail; 