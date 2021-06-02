import axios from "axios";

export const fetchPokemons = (url) => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch({ type: "FETCH_POKEMONS", payload: data.results });
  } catch (error) {
    console.log(error);
  }
};

export const singlePokemon = (url) => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch({ type: "SINGLE", payload: data.types });
  } catch (error) {
    console.log("vastalle");
  }
};
