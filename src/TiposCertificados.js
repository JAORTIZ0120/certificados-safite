import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const TiposCertificados = () => {

	return(
		<>
			<select className="form-select mb-3">
				<option value="RETENCION">Retención</option>
				<option value="RETEICA">ReteICA</option>
			</select>
		</>
	)

}

export default TiposCertificados;