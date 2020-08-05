import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import Game from "./Game";

import cookieSrc from "../cookie.svg";

function Item({ name, cost, value, handleClick, numOwned }) {
  return (
    <div onClick={handleClick}>
      <Name>{name}</Name>
      <Cost>Cost: {cost} </Cost>
      <Value>Value: {value}</Value>
      <Owned>Owned: {numOwned}</Owned>
    </div>
  );

  // why is nothing showing up...
}

const Name = styled.button`

`;

const Cost = styled.span`

`;

const Value = styled.span`

`;

const Owned = styled.span``;

export default Item;
