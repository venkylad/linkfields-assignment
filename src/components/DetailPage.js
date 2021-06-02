import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Row } from "antd";
import { fetchPokemons, singlePokemon } from "../redux/actions";
import axios from "axios";

const DetailPage = () => {
  //to find url parameter using react-router-dom
  const { pokemon } = useParams();

  // getting data from global store
  const allPokemons = useSelector((state) => state.pokemons);
  const singleOne = useSelector((state) => state.single);
  const dispatch = useDispatch();

  //using find methid to find particular pokemon from entire array of pokemons
  const pokeData = allPokemons.find((poke) => poke.name === pokemon);

  //need ID of pokemon for image, as we don't get as default
  const pokemonId = pokeData && pokeData.url.slice(-7).replace(/[^0-9]/g, "");
  // singlepokemon url to grab data
  const url = pokeData && pokeData.url;

  useEffect(() => {
    dispatch(singlePokemon(url));
  }, [dispatch]);

  console.log(url);
  return (
    <div>
      {/* Image here */}
      <Row justify="space-around" align="middle">
        <Col span={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <div align="middle">
            <img
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`}
              width="80%"
              alt=""
            />
          </div>
        </Col>
        <Col span={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {/* name and types from here */}
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
            <Link to="/">
              <Button>Go Back</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default DetailPage;
