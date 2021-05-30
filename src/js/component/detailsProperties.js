import React, { useEffect, useContext, useState } from "react";
import propTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Info } from "../component/info";

import { Context } from "../store/appContext";

export function DetailsProperties(props) {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let propertiesSelected = [];
	let detailTarget = store[props.name][params.theid];
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

	return (
		<>
			{propertiesSelected.map((propName, index) => {
				return (
					<div key={index} className="col-sm-4 col-md-2">
						<Info infoName={propName[0]} info={detailTarget ? detailTarget[propName[1]] : "Cargando..."} />
					</div>
				);
			})}
		</>
	);
}

DetailsProperties.propTypes = {
	name: propTypes.string
};
