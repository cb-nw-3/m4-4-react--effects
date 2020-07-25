import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Item from './Item';

import cookieSrc from "../cookie.svg";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

function handleClick(numCookies, item, purchasedItems) {
  console.log(item.id)
  let itemName = item.id;
  if (numCookies > item.cost) {
    numCookies -= item.cost;
    const updatedPurchasedItems = {
      ...purchasedItems,
      itemName: purchasedItems[item.id]++
    }
    return updatedPurchasedItems
  } else {
    //window.alert('Not enough cookies to buy this upgrade')
    return;
  }
}

const Game = () => {
  const [numCookies, setCookies] = React.useState(100);
  const [purchasedItems, setPurchasedItems] = React.useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          {/* TODO: Calcuate the cookies per second and show it here: */}
          <strong>0</strong> cookies per second
        </Indicator>
        <Button onClick={() => setCookies(numCookies + 1)}>
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {items.map(item => {
          return <Item 
            item={item} 
            numOwned={purchasedItems[item.id]} 
            // function in props for onClick in the item
            handleClick={() => {
              // check if you have enough cookies
              if (numCookies > item.cost) {
                // update state of cookies
                setCookies(numCookies - item.cost);
                // update state of items
                setPurchasedItems({
                  ...purchasedItems,
                  [item.id]: purchasedItems[item.id] + 1
                })
              } else {
                window.alert('Not enough cookies to buy this upgrade')
                return;
              }
            }}
            cookies={numCookies}
            key={item.id}></Item>
        })}
      </ItemArea>
      <HomeLink to="/">Return home</HomeLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const GameArea = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Cookie = styled.img`
  width: 200px;
`;

const ItemArea = styled.div`
  height: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: yellow;
`;

const Indicator = styled.div`
  position: absolute;
  width: 250px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

const Total = styled.h3`
  font-size: 28px;
  color: lime;
`;

const HomeLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
  color: #666;
`;

export default Game;
