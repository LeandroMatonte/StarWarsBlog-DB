import React, { useContext } from "react";
import starWarsLogo from "../../img/starWarsLogo.png";
import { useParams } from "react-router-dom";
import propTypes from "prop-types";
import { DetailsProperties } from "./detailsProperties";

import { Context } from "../store/appContext";

export function Details(props) {
	const params = useParams();
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div id={`container-${props.name}`} className="container">
				<div className="row my-5">
					<div className="col-sm-12 col-md-6 my-5 d-flex align-items-center">
						<div className="imagen-background p-2">
							<img src={store[props.name][params.theid].image_url} className="card-img-top" alt="..." />
						</div>
					</div>
					<div className="col-sm-12 col-md-6 text-center my-5">
						<h1 className="detailsHeader text-light">
							{store[props.name][0] ? store[props.name][params.theid].name : "cargando"}
						</h1>
						<p className="details-description text-light">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</p>
					</div>
					<div className="col-12">
						<div className="row justify-content-center align-items-center my-5 pt-2 text-light description">
							<DetailsProperties name={props.name} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Details.propTypes = {
	name: propTypes.string
};
