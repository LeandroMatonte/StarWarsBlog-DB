import React from "react";
import "../../styles/home.scss";
import { CardsRow } from "../component/cardsRow";

export const Home = () => {
	return (
		<div>
			<CardsRow name="characters" />
			<CardsRow name="planets" />
			<CardsRow name="vehicles" />
		</div>
	);
};
