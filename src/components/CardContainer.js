import { Card, Col, Pagination, Row } from "antd";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import { fetchPokemons } from "../redux/actions";

const CardContainer = () => {
  //getting all pokemons data from global store
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  // state for current or initial page number
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // to find and place 10 pokemons data in single page

  //will find last pokemon in page
  const lastPostIndex = currentPage * postsPerPage;
  // will find first pokemon in page
  const firstPostIndex = lastPostIndex - postsPerPage;
  // will slice entire data depending upon first and last index
  const currentPosts = pokemons.slice(firstPostIndex, lastPostIndex);

  //fetches data on first page load
  useEffect(() => {
    dispatch(fetchPokemons("https://pokeapi.co/api/v2/pokemon?limit=100"));
  }, [dispatch]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Page-{currentPage}</h1>

      {/* Pokemon cards from here */}
      <Row gutter={16} justify="center">
        {currentPosts.map((pokemon, index) => (
          <PokemonCard key={index} {...pokemon} />
        ))}
      </Row>

      {/* pagination from here */}
      <Row justify="center">
        <Col>
          <p>Page {currentPage}</p>
          <Pagination
            current={currentPage}
            total={pokemons.length}
            showSizeChanger={false}
            onChange={(current) => setCurrentPage(current)}
          />
        </Col>
      </Row>
    </>
  );
};

export default CardContainer;
