import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import starWarsLogo from "../../img/starWarsNav.png";

import { FavoritesButton } from "./favoritesButton";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const [logged, setLogged] = useState(false);
	useEffect(() => {
		setLogged(actions.isLogged);
	}, []);
	const { store, actions } = useContext(Context);
	const location = useLocation();
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img className="nav-logo m-2" src={starWarsLogo} />
					</span>
				</Link>
				{location.pathname == "/login" ? (
					""
				) : !logged ? (
					<FavoritesButton />
				) : (
					<div className="d-flex justify-content-between">
						<Link to="/login">
							<button type="button" className="btn btn-warning mr-2">
								Log In
							</button>
						</Link>

						<button type="button" className="btn btn-warning">
							Sign In
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};
