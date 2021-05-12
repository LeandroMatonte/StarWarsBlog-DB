import React, { useState, useContext, useEffect } from "react";
import starWarsLogo from "../../img/starWarsLogo.png";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export function DetailsCharacters() {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [detalles, setDetalles] = useState();

	const cargarDetalles = id => {
		fetch(store.characters[id].url)
			.then(res => res.json())
			.then(data => {
				setDetalles(data.result.properties);
			});
	};

	useEffect(
		() => {
			cargarDetalles(params.theid);
		},
		[store.characters[params.theid]]
	);
	return (
		<div className="detailsBackground">
			<div className="container">
				<div className="row my-5">
					<div className="col-sm-12 col-md-6 my-5">
						<img src={starWarsLogo} className="card-img-top" alt="..." />
					</div>
					<div className="col-sm-12 col-md-6 text-center my-5">
						<h1>{store.characters[0] ? store.characters[params.theid].name : "cargando"}</h1>
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
								<p>Birth Year</p>
								<p>{detalles ? detalles.birth_year : "Cargando..."}</p>
							</div>
							<div>
								<p>Gender</p>
								<p>{detalles ? detalles.gender : "Cargando..."}</p>
							</div>
							<div>
								<p>Height</p>
								<p>{detalles ? detalles.height : "Cargando..."}</p>
							</div>
							<div>
								<p>Skin Color</p>
								<p>{detalles ? detalles.skin_color : "Cargando..."}</p>
							</div>
							<div>
								<p>Eye Color</p>
								<p>{detalles ? detalles.eye_color : "Cargando..."}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
