import React from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from  "./auth/AuthContext";

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<MainRouter />
			</Router>
		</AuthProvider>
	);
};

export default App;
