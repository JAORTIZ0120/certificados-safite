import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Main from "./pages/Main";
import NoMatch from "./pages/NotMatch";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/:id" element={<Main />}/>
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;