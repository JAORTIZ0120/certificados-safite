import React from "react";
import {Routes, Route} from "react-router-dom";

import Main from "./pages/Main";

const App = () => {
	return (
		<Routes>
			<Route exact path="/" element={Main} />
		</Routes>
	)
}

export default App;