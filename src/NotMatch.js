import React from "react";

const NoMatch = () => {
	return (
		<>
			<div className="container col-auto  p-5 text-center shadow-lg bg-light rounded">
				<div className="row">
					<div className="col-md-6 offset-md-3 mb-5">
						<div className="card">
							<div className="card-body">
								<h1 className="text-center">Error 404</h1>
								<p className="text-center">La url solictada no éxiste.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default NoMatch;
