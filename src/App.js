import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";

import Generador from "./Generador";
import NoMatch from "./NotMatch";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Generador />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;