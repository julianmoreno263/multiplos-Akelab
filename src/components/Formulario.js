import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Formulario = ({ calcularSerie }) => {
	//state del formulario
	const [serie, guardarSerie] = useState({
		numero: '',
	});

	// state para el manejo del error en el formulario
	const [error, actualizarError] = useState(false);

	//función que actualiza el state del formulario
	const handleChange = (e) => {
		guardarSerie({
			[e.target.name]: e.target.value,
		});
	};

	//funcion submit
	const submitMultiplos = (e) => {
		e.preventDefault();

		//validar formulario
		if (numero < 1 || isNaN(numero)) {
			actualizarError(true);
			return;
		}

		//si la validacion pasa
		actualizarError(false);

		//hacer el calculo de la serie deultiplos
		calcularSerie(numero);

		//reiniciar formulario
		guardarSerie({
			numero: '',
		});
	};

	//extraer el valor del state
	const { numero } = serie;

	return (
		<Fragment>
			<h2>Formulario AKELAB</h2>
			<form onSubmit={submitMultiplos}>
				{error ? (
					<p className="alerta-error">Valor inválido, solo se admiten números enteros positivos</p>
				) : null}
				<label htmlFor="">Ingresa la cantidad de números a calcular</label>
				<input
					type="text"
					name="numero"
					placeholder="Ingresar cantidad de números"
					className="u-full-width"
					onChange={handleChange}
					value={numero}
				/>
				<button className="u-full-width button-primary">Calcular multiplos</button>
			</form>
		</Fragment>
	);
};

//documentacion de PropTypes
Formulario.propTypes = {
	calcularSerie: PropTypes.func.isRequired,
};

export default Formulario;
