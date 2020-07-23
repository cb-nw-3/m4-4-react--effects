import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import cookieSrc from "../cookie.svg";
import Item from "./Item";
import useInterval from "../hooks/use-interval.hook";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

const Game = () => {
  // TODO: Replace this with React state!
  const [numCookies, setNumCookies] = React.useState(100);
  const [purchasedItems, setPurchasedItems] = React.useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });
  // iterate through each type of item, and figure out the total value of the items you have. For example, if you have 3 cursors and 1 farm, your total cookies per tick is 83 (1 × 3 + 80 × 1).

  const calculateCookiesPerTick = (purchasedItems) => {
    const itemAmountArr = Object.values(purchasedItems);
    let totalCookies = 0;

    items.forEach((item) => {
      totalCookies += item.value * itemAmountArr[items.indexOf(item)];
    });

    return totalCookies;
  };

  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerTick(purchasedItems);

    setNumCookies(numCookies + numOfGeneratedCookies);
  }, 1000);

  React.useEffect(() => {
    document.title = `${numCookies} cookies - Cookie Clicker Workshop`;
  }, [numCookies]);

  const handleKeyPress = (ev) => {
    if (ev.key === "Space") {
      setNumCookies(numCookies + 1);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keyPress", handleKeyPress);

    return () => {
      window.removeEventListener("keyPress", handleKeyPress);
    };
  }, [numCookies]);

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          <strong>{calculateCookiesPerTick(purchasedItems)} </strong>
          cookies per second
        </Indicator>
        <Button onClick={() => setNumCookies(numCookies + 1)}>
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              name={item.name}
              numOwned={purchasedItems}
              handleClick={() => {
                if (item.cost > numCookies) {
                  window.alert("You can't afford that");
                  return;
                } else {
                  setNumCookies(numCookies - item.cost);
                  setPurchasedItems({
                    ...purchasedItems,
                    [item.id]: purchasedItems[item.id] + 1,
                  });
                }
              }}
            />
          );
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
