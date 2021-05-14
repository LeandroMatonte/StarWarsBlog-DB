import React, { useContext } from "react";
import { Details } from "../component/details";

import { Context } from "../store/appContext";

export function DetailsPlanets() {
	const { store, actions } = useContext(Context);
	const cargarDatos = async () => {
		await actions.obtenerInfoApi("planets");
	};
	if (!store.planets[0]) {
		cargarDatos();
	}
	return <Details name="planets" url="../../img/planetImage.png" />;
}
