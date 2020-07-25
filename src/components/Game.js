import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Item from "./Item";

import cookieSrc from "../cookie.svg";

//hooks
import useInterval from "../../src/hooks/use-interval.hook";
import useDocumentTitle from "../hooks/use-document-title";
import useKeyDown from "../hooks/use-event-keydown";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 5 },
  { id: "farm", name: "Farm", cost: 1000, value: 40 },
  { id: "factory", name: "Factory", cost: 5000, value: 100 },
];

const Game = () => {
  const [numCookies, setNumCookies] = React.useState(10);

  const [purchasedItems, setPurchasedItems] = React.useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
    factory: 0,
  });

  const addCookies = () => {
    setNumCookies((numCookies) => numCookies + 1)
  };

  //Add a custom title with useEffect
  useDocumentTitle({
    title: `${numCookies} ${numCookies === 1 ? 'cookie' : 'cookies'} - Cookie Clicker Workshop`,
    fallbackTitle: "Cookie Clicker Workshop",
  });

  //Add a global event listener
  useKeyDown({
    pressedKey: "Space",
    callbackFunction: addCookies,
  })

  const calculateCookiesPerTick = (purchasedItems) => {
    // console.log(Object.keys(purchasedItems))
    return Object.keys(purchasedItems).reduce((accumulator, currentValue) => {
      let numOwned = purchasedItems[currentValue];
      let item = items.find((item) => item.id === currentValue);
      let value = item.value;

      return accumulator + value * numOwned;
    }, 0);
  }

  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerTick(purchasedItems)

    setNumCookies(numCookies + numOfGeneratedCookies);
  }, 1000)
  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} {numCookies === 1 ? 'cookie' : 'cookies'}</Total>
          <strong>{calculateCookiesPerTick(purchasedItems)}</strong> {calculateCookiesPerTick(purchasedItems) === 1 ? 'cookie' : 'cookies'} per second
        </Indicator>
        <Button
          onClick={() => addCookies}
        >
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>
      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {items.map((item, index) => {
          return (
            <Item
              index={index}
              key={item.id}
              name={item.name}
              cost={item.cost}
              value={item.value}
              numOwned={purchasedItems[item.id]}
              handleClick={(ev) => {
                ev.stopPropagation();
                // console.log(purchasedItems[item.id])
                if (numCookies < item.cost) {
                  alert("You don't have enought cookies!");
                  return;
                } else {
                  setNumCookies(numCookies - item.cost)
                  setPurchasedItems({
                    ...purchasedItems,
                    [item.id]: purchasedItems[item.id] + 1,
                  })
                }

              }}
            />
          );
        })}

      </ItemArea>
      <HomeLink to="/">Home</HomeLink>
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
  outline: none;

  &:hover{
        box-shadow: 0px 0px 4px 4px darkblue;
        border-radius: 2px;
        padding: 10px;
        cursor: pointer;
    }
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
