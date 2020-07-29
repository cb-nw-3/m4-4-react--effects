import React, { useEffect, useRef } from "react";
import styled from "styled-components";

function Item({ id, name, cost, value, numOwned, handleClick, index }) {
  let ref = useRef(null);

  useEffect(() => {
    if (index === 0) {
      ref.current.focus();
    }
  }, []);

  return (
    <ItemButton onClick={handleClick} ref={ref}>
      <span>Name: {name},</span>
      <span>Cost: {cost},</span>
      <span>Value: {value},</span>
    </ItemButton>
  );
}

const ItemButton = styled.button`
  margin: 30px;
  border: 0px solid;
  padding: 10px 20px;
  background: #fbfbfb;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    background: #e9e9e9;
  }
`;

export default Item;
