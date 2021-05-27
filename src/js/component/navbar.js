import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starWarsNav.png";

import { FavoritesButton } from "./favoritesButton";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img className="nav-logo m-2" src={starWarsLogo} />
					</span>
				</Link>

				<FavoritesButton />
			</div>
		</nav>
	);
};
