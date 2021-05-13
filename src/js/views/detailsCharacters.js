import React, { useState, useContext, useEffect } from "react";
import starWarsLogo from "../../img/starWarsLogo.png";
import { useParams } from "react-router-dom";
import { Info } from "../component/info";

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
			<div id="containerCharacters" className="container">
				<div className="row my-5">
					<div className="col-sm-12 col-md-6 my-5">
						<img src={starWarsLogo} className="card-img-top" alt="..." />
					</div>
					<div className="col-sm-12 col-md-6 text-center my-5">
						<h1 className="detailsHeader">
							{store.characters[0] ? store.characters[params.theid].name : "cargando"}
						</h1>
						<p className="details-description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</p>
					</div>
					<div className="col-12">
						<div className="d-flex justify-content-around align-items-center my-5 text-light description">
							<Info infoName="Birth Year" info={detalles ? detalles.birth_year : "Cargando..."} />
							<Info infoName="Gender" info={detalles ? detalles.gender : "Cargando..."} />
							<Info infoName="Height" info={detalles ? detalles.height : "Cargando..."} />
							<Info infoName="Skin Color" info={detalles ? detalles.skin_color : "Cargando..."} />
							<Info infoName="Eye Color" info={detalles ? detalles.eye_color : "Cargando..."} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
