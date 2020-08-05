import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useInterval from "../hooks/use-interval.hook";

import cookieSrc from "../cookie.svg";
import Item from "./Item.js";
import useKeyDown from "../hooks/useKeyDown";
import useDocumentTitle from "../hooks/useDocumentTitle";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

function calculateCookiesPerTick(purchasedItems) {
  const totalProduction = items.reduce((acc, item) => {
    return acc + item.value * purchasedItems[item.id];
  }, 0);
  return totalProduction;
}

const Game = () => {
  const [purchasedItems, setPurchasedItems] = React.useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });

  const [numCookies, setNumCookies] = React.useState(100);

  const cookiesPlusOne = () => {
    setNumCookies((cookies) => cookies + 1);
  };

  const title = `I have ${numCookies} cookies!`;
  useDocumentTitle(title, "CookieClicker");

  useKeyDown("Space", cookiesPlusOne);

  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerTick(purchasedItems);
    setNumCookies(numCookies + numOfGeneratedCookies);
  }, 1000);

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          <strong>{calculateCookiesPerTick(purchasedItems)}</strong> cookies per
          second
        </Indicator>
        <Button onClick={() => setNumCookies(numCookies + 1)}>
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>

        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            value={item.value}
            cost={item.cost}
            numOwned={purchasedItems[item.id]}
            handleClick={() => {
              if (numCookies >= item.cost) {
                setPurchasedItems({
                  ...purchasedItems,
                  [item.id]: purchasedItems[item.id] + 1,
                });
                setNumCookies(numCookies - item.cost);
              } else {
                window.alert("not enough Cookies!");
              }
            }}
          />
        ))}
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
