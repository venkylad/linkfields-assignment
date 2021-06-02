import axios from "axios";

// action creator for fetching all pokemons
export const fetchPokemons = (url) => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch({ type: "FETCH_POKEMONS", payload: data.results });
  } catch (error) {
    console.log(error);
  }
};

// action creator for fetching single pokemon type
export const singlePokemon = (url) => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch({ type: "SINGLE", payload: data.types });
  } catch (error) {
    console.log("vastalle");
  }
};
