import React from "react";
import styled from "styled-components";

const Item = ({ name, cost, value, numOwned, handleClick }) => {
  return (
    <Wrapper onClick={handleClick}>
      <div>
        <Name>{name}</Name>
        <ItemBuy>
          Cost: {cost} cookies. Produces {value} cookies/second.
        </ItemBuy>
      </div>
      <NumOwned>{numOwned}</NumOwned>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  text-align: left;
  padding: 10px 0;
  width: 500px;
  background: transparent;
  border: none;
  border-bottom-style: solid;
  color: white;
`;
const Name = styled.h2`
  font-size: 2em;
`;
const ItemBuy = styled.p`
  font-size: 1.2em;
  padding-right: 10px;
  color: lightgray;
`;
const NumOwned = styled.div`
  font-size: 3em;
`;

export default Item;
