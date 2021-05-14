import React, { useContext } from "react";
import { Details } from "../component/details";

import { Context } from "../store/appContext";

export function DetailsVehicles() {
	const { store, actions } = useContext(Context);
	const cargarDatos = async () => {
		await actions.obtenerInfoApi("vehicles");
	};
	if (!store.vehicles[0]) {
		cargarDatos();
	}
	return <Details name="vehicles" />;
}
