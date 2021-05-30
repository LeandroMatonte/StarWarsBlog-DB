const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			vehicles: [],
			planets: [],
			characterProps: [
				["Birth Year", "birth_year"],
				["Gender", "gender"],
				["Height", "height"],
				["Skin Color", "skin_color"],
				["Eye Color", "eye_color"]
			],
			planetsProps: [
				["Climate", "climate"],
				["Diameter", "diameter"],
				["Gravity", "gravity"],
				["Population", "population"],
				["Terrain", "terrain"]
			],
			vehiclesProps: [
				["Model", "model"],
				["Cost in credits", "cost_in_credits"],
				["Length", "length"],
				["Max Speed", "max_atmosphering_speed"],
				["Passengers", "passengers"]
			]
		},
		actions: {
			loadSomeData: () => {
				if (localStorage.getItem("favorites")) {
					setStore({ favorites: JSON.parse(localStorage.getItem("favorites")) });
				}
				getActions().obtenerInfoApi("people");
				getActions().obtenerInfoApi("vehicles");
				getActions().obtenerInfoApi("planets");
			},
			login: async (email, pass) => {
				let myHeaders = new Headers();
				myHeaders.append("content-type", "application/json");

				let raw = JSON.stringify({
					email: email,
					password: pass
				});

				let requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				const resLogin = await fetch(process.env.BACKEND_URL + "/login", requestOptions);
				const data = await resLogin.json();
				const ok = await resLogin.ok;
				sessionStorage.setItem("token", data.token);
				return ok;
			},
			isLogged: async () => {
				console.log(sessionStorage.getItem("token"));
				return sessionStorage.getItem("token") != undefined;
			},
			obtenerInfoApi: async tipo => {
				let link = process.env.BACKEND_URL + "/" + tipo;
				if (tipo == "people") {
					tipo = "characters";
				}
				if (localStorage.getItem(tipo)) {
					setStore({ [tipo]: JSON.parse(localStorage.getItem(tipo)) });
				} else {
					const resInfo = await fetch(link);
					const data = await resInfo.json();
					setStore({ [tipo]: data });
					localStorage.setItem(tipo, JSON.stringify(getStore()[tipo]));
				}
			},
			addFavorite: (id, tipo) => {
				const store = getStore();
				let favoritesNew = [...store.favorites];
				if (!store.favorites.includes(id)) {
					favoritesNew.push({ name: store[tipo][id].name, tipo: tipo, id: id });
				}
				localStorage.setItem("favorites", JSON.stringify(favoritesNew));
				setStore({ favorites: favoritesNew });
			},
			delFavorite: (id, tipo) => {
				const store = getStore();
				let favoritesNew = [...store.favorites];
				let i = 0;
				while (i < favoritesNew.length) {
					if (favoritesNew[i].tipo == tipo && favoritesNew[i].id == id) {
						favoritesNew.splice(i, 1);
					}
					i++;
				}
				localStorage.setItem("favorites", JSON.stringify(favoritesNew));
				setStore({ favorites: favoritesNew });
			},
			isFav: (id, tipo) => {
				const store = getStore();
				let isfavorite = false;
				let i = 0;
				while (i < store.favorites.length && !isfavorite) {
					if (store[tipo][id].name == store.favorites[i].name) {
						isfavorite = true;
					}
					i++;
				}
				return isfavorite;
			}
		}
	};
};

export default getState;
