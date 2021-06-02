export const fetchPokemon = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POKEMONS":
      return action.payload;
    default:
      return state;
  }
};

export const singlePokemon = (state = [], action) => {
  switch (action.type) {
    case "SINGLE":
      return action.payload;
    default:
      return state;
  }
};
