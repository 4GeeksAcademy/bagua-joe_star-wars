const getState = ({ getStore, getActions, setStore }) => {
	const API_URL ="https://swapi.dev/api";
	return {
		store: {
			characters: [], 
			planets: [], 
			vehicles: [],
			favorites: [],
			
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getPeople: () => {
				fetch(`${API_URL}/people`)
					.then((res) => res.json())
					.then((data) => {
						console.log("response jsonified:", data)
						setStore(
							{ characters: data.results }
						)
					})
					.catch((error) => {
						console.error("Error fetching people:", error);
						
					});
				

			},
			getPlanets: () => {
				fetch(`${API_URL}/planets`)
					.then((res) => res.json())
					.then((data) => {
						console.log("response jsonified:", data)
						setStore(
							{ planets: data.results }
						)
					})
					.catch((error) => {
						console.error("Error fetching planets:", error);
						
					});
			},
			getVehicles: () => {
				fetch(`${API_URL}/vehicles`)
					.then((res) => res.json())
					.then((data) => {
						console.log("response jsonified:", data)
						setStore(
							{ vehicles: data.results }
						)
					})
					.catch((error) => {
						console.error("Error fetching vehicles:", error);
						
					});
			},

			addFavorite: (favItem) => {
				setStore({ favorites: [...getStore().favorites, favItem ]})
			},

			deleteFavorite: (index) => {
				const store = getStore();
				const newFavorites =store.favorites.filter((_, i) => i !== index);
				setStore({favorites: newFavorites})
			},


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
