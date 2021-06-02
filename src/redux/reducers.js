//reducer for fetching and storing all 100 pokemons
export const fetchPokemon = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POKEMONS":
      return action.payload;
    default:
      return state;
  }
};

//reducer for fetching single pokemon data
export const singlePokemon = (state = [], action) => {
  switch (action.type) {
    case "SINGLE":
      return action.payload;
    default:
      return state;
  }
};
