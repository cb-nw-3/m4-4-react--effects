import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Item from './Item';
import useInterval from '../hooks/use-interval.hook';
import useRefreshTabTitle from '../hooks/use-updateTabTitle.hook';

import cookieSrc from "../cookie.svg";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

function calculateCookiesPerTick(purchasedItems) {
  // initialize generated cookies
  let cookies = 0;
  // loop through purchased items object
  Object.keys(purchasedItems).forEach(item => {
    // check each items
    items.forEach(dataItem => {
      // verify the value
      if (dataItem.id === item && purchasedItems[item] > 0) {
        // add value
        cookies += dataItem.value * purchasedItems[item]
      }
    })
  })
  // return value
  return cookies
}

const Game = () => {
  // initialize state of cookies
  const [numCookies, setCookies] = React.useState(100);
  // initialize state for items
  const [purchasedItems, setPurchasedItems] = React.useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });
  // given interval in folder hooks
  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerTick(purchasedItems)

    setCookies(numCookies + numOfGeneratedCookies)

  }, 1000)
  // tab title update
  useRefreshTabTitle({title: `${numCookies} cookies - Cookie Clicker`})

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          {/* TODO: Calcuate the cookies per second and show it here: */}
          <strong>{calculateCookiesPerTick(purchasedItems)}</strong> cookies per second
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
            purchasedItems={purchasedItems}
            numOwned={purchasedItems[item.id]} 
            // function in props for onClick in the item
            handleClick={() => {
              // check if you have enough cookies
              if (numCookies >= item.cost) {
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
