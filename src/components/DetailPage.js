import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "antd";
import { fetchPokemons, singlePokemon } from "../redux/actions";
import axios from "axios";

const DetailPage = () => {
  const { pokemon } = useParams();

  const allPokemons = useSelector((state) => state.pokemons);
  const singleOne = useSelector((state) => state.single);
  const dispatch = useDispatch();

  const pokeData = allPokemons.find((poke) => poke.name === pokemon);
  const pokemonId = pokeData && pokeData.url.slice(-7).replace(/[^0-9]/g, "");
  const url = pokeData && pokeData.url;

  const getPokemon = async () => {
    const { data } = await axios.get(url);
    console.log(data);
  };

  useEffect(() => {
    getPokemon();
    dispatch(singlePokemon(url));
  }, [dispatch]);

  console.log(url);
  return (
    <div>
      <Row justify="space-around" align="middle">
        <Col span={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <div align="middle">
            <img
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`}
              width="450px"
              alt=""
            />
          </div>
        </Col>
        <Col span={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <div>
            <h1>Name: {pokemon.toUpperCase()}</h1>
            <h3>Types ({singleOne.length})</h3>
            {singleOne.map((type, idx) => (
              <ul key={idx}>
                <li>
                  <h2>{type.type.name}</h2>
                </li>
              </ul>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default DetailPage;
