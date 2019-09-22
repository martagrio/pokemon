import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const PokeDetail = props => {
	return(
		<React.Fragment>
		<div className="detail">soy el detalle</div>
		<Link to ="/" className="app__go-back">volver al listado</Link>
		</React.Fragment>
	);
}

PokeDetail.propTypes = {

}

export default PokeDetail; 