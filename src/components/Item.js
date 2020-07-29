import React from "react";
import styled from "styled-components";

function Item(props) {
  const { id, name, cost, value } = props.item;
  const { handleClick, purchasedValue, index } = props;
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (index == 0) {
      ref.current.focus();
    }
  }, []);

  return (
    <ItemButton
      onClick={() => {
        handleClick(id, cost);
      }}
      ref={ref}
    >
      <ItemCell>
        <ItemNameAndCost>
          <ItemName>{name}</ItemName>
          <ItemCostAndProduce>
            <ItemCost>Cost: {cost} cookies(s).</ItemCost>
            <ItemProduce>Produces: {value} per second.</ItemProduce>
          </ItemCostAndProduce>
        </ItemNameAndCost>
        <ItemValue>
          <ItemScore>{purchasedValue}</ItemScore>
        </ItemValue>
      </ItemCell>
    </ItemButton>
  );
}
const ItemButton = styled.button`
  background-color: rgb(34, 34, 34);
  color: white;
`;

const ItemCell = styled.div`
  display: flex;
  text-align: left;
`;
const ItemNameAndCost = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;
const ItemName = styled.h1`
  flex: 1;
`;
const ItemCostAndProduce = styled.div`
  flex: 1;
  display: flex;
`;
const ItemCost = styled.p`
  flex: 1;
  font-size: 20px;
`;
const ItemProduce = styled.p`
  flex: 1;
  font-size: 20px;
`;

const ItemValue = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const ItemScore = styled.h1`
  position: absolute;
  bottom: 0;
  left: 0;
  flex: 1;
  display: flex;
  font-size: 40px;
`;

export default Item;
