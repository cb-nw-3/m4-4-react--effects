import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Ex1) Added functions for Item hooks.
const Item = ({ name, cost, value, handleClick, numOwned }) => {
  return (
    <Button onClick={handleClick}>
      <h1>{name}</h1>
      <p>
        Produces {value} per hour and costs {cost}
      </p>
      <p>Currently in the factory {numOwned}</p>
    </Button>
  );
};

const Button = styled.button`
  border: 1px solid red;
  padding: 20px;
`;

export default Item;
