import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const FavoritesButton = () => {
	const { store, actions } = useContext(Context);
	const [isSelected, setIsSelected] = useState(-1);
	return (
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
					store.favorites.map((favorite, index) => {
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
									onMouseEnter={() => setIsSelected(index)}
									onMouseLeave={() => setIsSelected(-1)}
									className={`ml-1 ${isSelected == index ? "text-danger" : ""}`}>
									<i className="fas fa-trash" />
								</a>
							</button>
						);
					})
				)}
			</div>
		</div>
	);
};
