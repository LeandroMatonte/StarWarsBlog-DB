import React, { useState, useContext, useEffect } from "react";
import starWarsLogo from "../../img/starWarsLogo.png";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export function DetailsVehicles() {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [detalles, setDetalles] = useState();

	const cargarDetalles = id => {
		fetch(store.vehicles[id].url)
			.then(res => res.json())
			.then(data => {
				setDetalles(data.result.properties);
			});
	};

	useEffect(
		() => {
			cargarDetalles(params.theid);
		},
		[store.vehicles[params.theid]]
	);

	return (
		<div className="detailsBackground">
			<div id="containerVehicles" className="container">
				<div className="row my-5">
					<div className="col-sm-12 col-md-6 my-5">
						<img src={starWarsLogo} className="card-img-top" alt="..." />
					</div>
					<div className="col-sm-12 col-md-6 text-center my-5">
						<h1 className="detailsHeader">
							{store.vehicles[0] ? store.vehicles[params.theid].name : "cargando"}
						</h1>
						<p className="details-description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</p>
					</div>
					<hr className="my-4" />
					<div className="col-12">
						<div className="d-flex justify-content-around my-5 text-light align-items-center description">
							<div>
								<p>Model</p>
								<p>{detalles ? detalles.model : "Cargando..."}</p>
							</div>
							<div>
								<p>Cost in credits</p>
								<p>{detalles ? detalles.cost_in_credits : "Cargando..."}</p>
							</div>
							<div>
								<p>Length</p>
								<p>{detalles ? detalles.length : "Cargando..."}</p>
							</div>
							<div>
								<p>Max Speed</p>
								<p>{detalles ? detalles.max_atmosphering_speed : "Cargando..."}</p>
							</div>
							<div>
								<p>passengers</p>
								<p>{detalles ? detalles.passengers : "Cargando..."}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
