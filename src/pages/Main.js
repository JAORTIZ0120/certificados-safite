import React from 'react';
import TiposCertificados from '../TiposCertificados';

import 'bootstrap/dist/css/bootstrap.min.css';
import { datosEmpresas } from '../Empresas';


const logos = require.context('../assets/img', true);

const Main = (props) => {
	const empresa = datosEmpresas['1'];

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
								<form className="form-group">
									<label className="form-label">NIT / RUT </label>
									<input type="text" className="form-control mb-3" autoFocus placeholder="Sin digito de verificacion"/>
									<label className="form-label">Contraseña</label>
									<input type="password" autoComplete="off" className="form-control"/>
									<div className="form-text mb-3 tam-letra">{ empresa.mensajeFormulario }</div>
									<label className="form-label">Tipo Certificado</label>
									<TiposCertificados />
									<div className="modal-footer">
										<button className="btn btn-success">Consultar</button>
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

export default Main;