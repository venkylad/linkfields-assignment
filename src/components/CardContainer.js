import { Card, Col, Pagination, Row } from "antd";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import { fetchPokemons } from "../redux/actions";

const CardContainer = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = pokemons.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    dispatch(fetchPokemons("https://pokeapi.co/api/v2/pokemon?limit=100"));
  }, [dispatch]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Page-{currentPage}</h1>
      <Row gutter={16} justify="center">
        {currentPosts.map((pokemon, index) => (
          <PokemonCard key={index} {...pokemon} />
        ))}
      </Row>
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
