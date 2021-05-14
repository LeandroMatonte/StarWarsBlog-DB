import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starWarsLogo.png";
import propTypes from "prop-types";

import { Context } from "../store/appContext";

export function CardsRow(props) {
	const { store, actions } = useContext(Context);
	return (
		<div className="container my-3">
			<h1 className="cardsRowHeader">{props.name}</h1>
			<div className="tarjetas py-2 d-flex align-items-center">
				{store[props.name].map((item, index) => {
					return (
						<div key={index} className="mr-5">
							<div className="card my-1" style={{ width: "25rem" }}>
								<img src={starWarsLogo} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<Link to={`/details-${props.name}/${index}`}>
											<span className="btn btn-outline-light">Learn more!</span>
										</Link>
										<button
											onClick={() => {
												if (actions.isFav(index, props.name)) {
													actions.delFavorite(index, props.name);
												} else {
													actions.addFavorite(index, props.name);
												}
											}}
											type="button"
											className={`btn btn-outline-warning ${
												actions.isFav(index, props.name) ? "active" : ""
											}`}>
											<i className="fas fa-heart" />
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

CardsRow.propTypes = {
	name: propTypes.string
};
