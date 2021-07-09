import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

function App() {
	//state principal para guardar los resultados
	const [datos, guardarDatos] = useState([]);

	//funcion que calcula la serie con los multiplos de 3 y 5
	const calcularSerie = (numero) => {
		let numeros = [0];
		// let numeros = [];
		for (let i = 1; i <= numero; i++) {
			numeros.push(i);

			if (i % 15 === 0) {
				numeros[i] = `AKELAB`;
			} else if (i % 3 === 0) {
				numeros[i] = `AKE`;
			} else if (i % 5 === 0) {
				numeros[i] = `LAB`;
			}
		}

		//aqui se usa la funcion que actualiza el state datos para guardar la serie de multiplos
		guardarDatos(numeros.join('-'));
	};

	return (
		<Fragment>
			<h1>Serie AKELAB</h1>

			<div className="container">
				<div className="row">
					<div className="one-half column">
						<Formulario calcularSerie={calcularSerie} />
					</div>
					<div className="one-half column">
						<Resultado datos={datos} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
