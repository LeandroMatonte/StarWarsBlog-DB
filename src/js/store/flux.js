const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			vehicles: [],
			planets: []
		},
		actions: {
			loadSomeData: () => {
				getActions().obtenerInfoApi("people");
				getActions().obtenerInfoApi("vehicles");
				getActions().obtenerInfoApi("planets");
			},
			obtenerInfoApi: async tipo => {
				let link = `https://www.swapi.tech/api/${tipo}/`;
				if (tipo == "people") {
					tipo = "characters";
				}
				if (localStorage.getItem(tipo)) {
					setStore({ [tipo]: JSON.parse(localStorage.getItem(tipo)) });
				} else {
					await fetch(link)
						.then(res => res.json())
						.then(data => setStore({ [tipo]: data.results }));
					localStorage.setItem(tipo, JSON.stringify(getStore()[tipo]));
				}
			},
			addFavorite: (id, tipo) => {
				const store = getStore();
				let favoritesNew = [...store.favorites];
				if (!store.favorites.includes(id)) {
					favoritesNew.push({ name: store[tipo][id].name, tipo: tipo, id: id });
				}
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
