import React from "react";
import styled from "styled-components";

const Item = ({ item }) => {
  return (
    <ItemElement>
      <ItemNameAndCost>
        <ItemTitle>{item.name}</ItemTitle>
        <ItemCost>Cost: {item.cost}</ItemCost>
      </ItemNameAndCost>
      <ItemValue>{item.value}</ItemValue>
    </ItemElement>
  );
};
const ItemElement = styled.div`
  border-bottom: 3px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ItemNameAndCost = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
`;
const ItemValue = styled.div`
  font-size: 30px;
  flex-grow: 1;
  text-align: right;
`;

const ItemCost = styled.div`
  font-size: 15px;
  color: grey;
`;

const ItemTitle = styled.span`
  font-size: 20px;
`;
export default Item;
