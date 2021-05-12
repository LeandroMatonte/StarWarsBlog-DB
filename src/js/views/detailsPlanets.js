import React, { useState, useContext, useEffect } from "react";
import starWarsLogo from "../../img/starWarsLogo.png";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export function DetailsPlanets() {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [detalles, setDetalles] = useState();

	const cargarDetalles = id => {
		fetch(store.planets[id].url)
			.then(res => res.json())
			.then(data => {
				setDetalles(data.result.properties);
			});
	};

	useEffect(
		() => {
			cargarDetalles(params.theid);
		},
		[store.planets[params.theid]]
	);

	return (
		<div className="detailsBackground">
			<div className="container">
				<div className="row my-5">
					<div className="col-sm-12 col-md-6 my-5">
						<img src={starWarsLogo} className="card-img-top" alt="..." />
					</div>
					<div className="col-sm-12 col-md-6 text-center my-5">
						<h1>{detalles ? detalles.name : "Cargando..."}</h1>
						<p className="details-description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</p>
					</div>
					<hr className="my-4" />
					<div className="col-12">
						<div className="d-flex justify-content-around my-5 text-light">
							<div>
								<p>Climate</p>
								<p>{detalles ? detalles.climate : "Cargando..."}</p>
							</div>
							<div>
								<p>Diameter</p>
								<p>{detalles ? detalles.diameter : "Cargando..."}</p>
							</div>
							<div>
								<p>Gravity</p>
								<p>{detalles ? detalles.gravity : "Cargando..."}</p>
							</div>
							<div>
								<p>Population</p>
								<p>{detalles ? detalles.population : "Cargando..."}</p>
							</div>
							<div>
								<p>Terrain</p>
								<p>{detalles ? detalles.terrain : "Cargando..."}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
