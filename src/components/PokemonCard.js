import React from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, url }) => {
  const style = {
    padding: "8px",
    margin: "10px",
    border: "1px solid grey",
    width: "250px",
    height: "120px",
    textAlign: "center",
    borderRadius: "10px"
  };

  return (
    <>
      <Col
        align="middle"
        className="gutter-row"
        span={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Link to={`/${name}`}>
          <Card style={style}>
            <h2>{name.toUpperCase()}</h2>
          </Card>
        </Link>
      </Col>
    </>
  );
};
export default PokemonCard;
