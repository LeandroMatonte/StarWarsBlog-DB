import React from "react";
import propTypes from "prop-types";

export function Info(params) {
	return (
		<div className="description-item">
			<p className="text-danger">{params.infoName}</p>
			<p>{params.info}</p>
		</div>
	);
}

Info.propTypes = {
	infoName: propTypes.string,
	info: propTypes.string
};
