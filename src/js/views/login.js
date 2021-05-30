import React, { useContext, useRef, useState } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const [auth, setAuth] = useState(false);
	const email = useRef("");
	const password = useRef("");
	const { store, actions } = useContext(Context);
	const login = async e => {
		e.preventDefault();
		let ingreso = await actions.login(email.current.value, password.current.value.toString());
		setAuth(ingreso);
	};
	return (
		<div className="container d-flex justify-content-center mt-5">
			{auth ? (
				<Redirect to="/" />
			) : (
				<div className="loginForm w-100 rounded p-5">
					<form onSubmit={login}>
						<div className="form-group">
							<label htmlFor="emailAdress">Email address</label>
							<input ref={email} type="email" className="form-control" id="emailAdress" />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input ref={password} type="password" className="form-control" id="password" />
						</div>
						<button type="submit" className="btn btn-warning">
							Log in
						</button>
					</form>
				</div>
			)}
		</div>
	);
};
