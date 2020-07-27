import React from "react";
import styled from "styled-components";

function Item({ id, name, cost, value, numOwned, handleClick }) {
  return (
    <ItemDiv onClick={handleClick}>
      <span>Name: {name},</span>
      <span>Cost: {cost},</span>
      <span>Value: {value},</span>
    </ItemDiv>
  );
}

const ItemDiv = styled.div`
  margin: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export default Item;
