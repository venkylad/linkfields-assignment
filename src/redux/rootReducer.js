import { combineReducers } from "redux";
import { fetchPokemon, singlePokemon } from "./reducers";

//root reducer
const rootReducer = combineReducers({
  pokemons: fetchPokemon,
  single: singlePokemon
});

export default rootReducer;
