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
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }));

				fetch("https://www.swapi.tech/api/vehicles")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }));

				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }));
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
