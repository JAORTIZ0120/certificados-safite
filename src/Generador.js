import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';

const logos = require.context('./assets/img', true);

const Generador = () => {	
	const [empresa, setDatosEmpresas] = useState({
		nombreEmpresa: "Empresa Default",
		logo: "./Logo_Safite.png",
		mensajeFormulario : "Empresa Default",
		mensajeFooter: "Empresa Default"
	});

	useEffect(() => {
		fetch("http://certificados.api.safite.com/", {method: 'POST' })
		.then(res => res.json())
		.then(
			(result) => {
				const plantillaEmpresa = document.location.hostname;
				setDatosEmpresas(result.items[plantillaEmpresa]);
			}
		)
	}, []);

	const [datos, setDatos] = useState({
		nit: '',
		password: '',
		tipoCertificado: '',
	});

	const handleInputChange = (event) => {
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		let nitCertificado = datos.nit;
		let ultimosDigitos = nitCertificado.slice(-4);

		if(ultimosDigitos !== datos.password) {
			swal({
				title: 'Error',
				text: 'Contraseña incorrecta',
				icon: 'error',
				button: 'Aceptar'
			})
			return;
		}

		if(!datos.tipoCertificado){
			swal({
				title: 'Error',
				text: 'Debe seleccionar un tipo de certificado',
				icon: 'error',
				button: 'Aceptar'
			})

			return;
		}
		const url = `certificados/${empresa.nombreEmpresa}/${datos.tipoCertificado}/${datos.tipoCertificado}_${datos.nit}.pdf`;

		var xhr = new XMLHttpRequest();
		xhr.open('HEAD', url, false);
		xhr.send();
	
		if (xhr.status === 404) {
			swal({
				title: 'Alerta',
				text: 'No se ha encontrado un certificado con los datos ingresados',
				footer: 'Porfavor verifique los datos e intente nuevamente',
				icon: 'warning',
				button: 'Aceptar'
			})

			return;
		} else {
			window.open(url, '_blank');
		}
	}

	return (
		<>
			<div className="container shadow-lg bg-light rounded">
				<div className="row">
					<div className="card mb-3 header-sup bg-light">
						<div className="row g-0 mt-4">
							<div className="col-md-2">
								<img src={ logos(`${empresa.logo}`) } className="img-fluid rounded-start logoEmpresa" alt="..." />
							</div>
							<div className="col-md-10">
								<div className="card-body text-center">
									<h1 className="align-middle">Certificados de Impuestos</h1>
									<h3 className="align-middle">(Retención, ReteICA)</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 offset-md-3 mb-5">
						<div className="card">
							<div className="card-body">
								<form className="form-group" onSubmit={ handleSubmit }>
									<label className="form-label">NIT / RUT </label>
									<input 
										name="nit" 
										type="text" 
										className="form-control mb-3" 
										autoFocus
										required
										placeholder="Con digito de verificacion sin el guion (Ej: 123456789)"
										onChange={ handleInputChange }
									/>
									<label className="form-label">Contraseña</label>
									<input 
										name="password" 
										type="password" 
										autoComplete="off" 
										required
										className="form-control" 
										onChange={ handleInputChange }
									/>
									<div className="form-text mb-3 tam-letra">{ empresa.mensajeFormulario }</div>
									<label className="form-label">Tipo Certificado</label>
									<select name="tipoCertificado" className="form-select mb-3" onChange={ handleInputChange }>
										<option value="">Seleccione una opción</option>
										<option value="RENTA">Retención</option>
										<option value="ICA">ReteICA</option>
									</select>
									<div className="modal-footer">
										<button className="btn btn-success" type="submit">Consultar</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center mt-3">
				<small>{empresa.mensajeFooter}</small>
			</div>
		</>
	);
}

export default Generador;