import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starWarsNav.png";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img className="nav-logo m-2" src={starWarsLogo} />
					</span>
				</Link>

				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle d-flex align-items-center"
						type="button"
						id="favorites"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						<div className="rounded bg-dark text-light mr-1 px-1">{store.favorites.length}</div>
						Favorites
					</button>
					<div className="dropdown-menu" aria-labelledby="favorites">
						{store.favorites.length == 0 ? (
							<a className="dropdown-item d-flex justify-content-between align-items-center">Empty</a>
						) : (
							""
						)}
						{store.favorites.map((favorite, index) => {
							return (
								<button
									key={index}
									className="dropdown-item d-flex justify-content-between align-items-center"
									href="#">
									<Link to={`/details-${favorite.tipo}/${favorite.id}`}>{favorite.name}</Link>
									<a
										onClick={() => {
											actions.delFavorite(favorite.id, favorite.tipo);
										}}
										className="ml-1">
										<i className="fas fa-trash" />
									</a>
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
