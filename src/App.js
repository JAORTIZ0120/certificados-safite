import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const logos = require.context('./assets/img', true);

const App = () => {
	return (
		<>
			<div className="container shadow-lg bg-body rounded">
				<div className="row">
					<div className="card mb-3 header-sup">
						<div className="row g-0 mt-4">
							<div className="col-md-3">
								<img src={ logos(`./Logo_Safite.png`) } className="img-fluid rounded-start logoEmpresa" alt="..." />
							</div>
							<div className="col-md-9">
								<div className="card-body text-center">
									<h1 className="align-middle">Certificados de Impuestos</h1>
									<h3 className="align-middle">(Retención, ReteICA, ReteIVA)</h3>
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
									<label className="form-label">Constraseña</label>
									<input type="password" autoComplete="off" className="form-control"/>
									<div className="form-text mb-3 tam-letra">Si no conoce su contraseña o desea mayor información, por favor comuníquese al teléfono 0x6 3217144 en la Ciudad de Pereira</div>
									<label className="form-label">Tipo Certificado</label>
									<select className="form-select mb-3">
										<option value="RETENCION">Retención</option>
										<option value="RETEICA">ReteICA</option>
										<option value="RETEIVA">ReteIVA</option>
									</select>
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
				<small>En caso de cualquier observación sobre la información, por favor comunicarse con el 0x 6 3217144. 
				Al no recibirse ningún reporte dentro del plazo indicado, se entenderán como aceptados los certificados de 
				Retefuente y Reteica del año 2019, y no se podrá hacer ningún tipo de modificación posterior.</small>
			</div>
		</>
	);
}

export default App;