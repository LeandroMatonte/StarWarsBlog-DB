import React from "react";
import "../../styles/home.scss";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = () => {
	return (
		<div className="homeBackground">
			<Characters />
			<Planets />
			<Vehicles />
		</div>
	);
};
