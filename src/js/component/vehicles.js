import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starWarsLogo.png";

import { Context } from "../store/appContext";

export function Vehicles() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5">
			<h1>Vehicles</h1>
			<div className="tarjetas mb-5 py-2 d-flex align-items-center">
				{store.vehicles.map((vehicle, index) => {
					return (
						<div key={index} className="mr-5">
							<div className="card my-1" style={{ width: "25rem" }}>
								<img src={starWarsLogo} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{vehicle.name}</h5>
									<p className="card-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<Link to={"/details-vehicles/" + index}>
											<span className="btn btn-outline-light">Learn more!</span>
										</Link>
										<button
											onClick={() => {
												if (actions.isFav(index, "vehicles")) {
													actions.delFavorite(index, "vehicles");
												} else {
													actions.addFavorite(index, "vehicles");
												}
											}}
											type="button"
											className={`btn btn-outline-warning ${
												actions.isFav(index, "vehicles") ? "active" : ""
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
