import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Resultado = ({ datos }) => {
	return (
		<Fragment>
			<h2>Resultado Serie Akelab</h2>
			<div className="serie">
				<p>
					<span>{datos}</span>
				</p>
			</div>
		</Fragment>
	);
};

//documentacion de PropTypes
Resultado.propTypes = {
	datos: PropTypes.array.isRequired,
};

export default Resultado;
