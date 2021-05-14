import React, { useEffect, useContext, useState } from "react";
import propTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Info } from "../component/info";

import { Context } from "../store/appContext";

export function DetailsProperties(props) {
	const params = useParams();
	const { store, actions } = useContext(Context);
	let propertiesSelected = [];

	switch (props.name) {
		case "characters":
			propertiesSelected = [...store.characterProps];
			break;
		case "planets":
			propertiesSelected = [...store.planetsProps];
			break;
		case "vehicles":
			propertiesSelected = [...store.vehiclesProps];
			break;
	}

	const [detalles, setDetalles] = useState();
	const cargarDetalles = id => {
		fetch(store[props.name][id].url)
			.then(res => res.json())
			.then(data => {
				setDetalles(data.result.properties);
			});
	};

	useEffect(
		() => {
			cargarDetalles(params.theid);
		},
		[store[props.name][params.theid]]
	);
	return (
		<>
			{propertiesSelected.map((propName, index) => {
				return (
					<div key={index} className="col-sm-4 col-md-2">
						<Info infoName={propName[0]} info={detalles ? detalles[propName[1]] : "Cargando..."} />
					</div>
				);
			})}
		</>
	);
}

DetailsProperties.propTypes = {
	name: propTypes.string
};
