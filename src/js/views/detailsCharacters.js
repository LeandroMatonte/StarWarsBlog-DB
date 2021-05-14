import React, { useContext } from "react";
import { Details } from "../component/details";

import { Context } from "../store/appContext";

export function DetailsCharacters() {
	const { store, actions } = useContext(Context);
	const cargarDatos = async () => {
		await actions.obtenerInfoApi("people");
	};
	if (!store.characters[0]) {
		cargarDatos();
	}

	return <Details name="characters" url="../../img/characterImage.png" />;
}
