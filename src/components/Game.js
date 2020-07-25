import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Item from "./Item";
import useInterval from "../hooks/use-interval.hook";
import useKeydown from "../hooks/useKeydown.hook";
import useDocumentTitle from "../hooks/useDocumentTitle.hook";
import cookieSrc from "../cookie.svg";

const itemsArray = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1, type: "tick" },
  { id: "grandma", name: "Grandma", cost: 100, value: 10, type: "tick" },
  { id: "farm", name: "Farm", cost: 1000, value: 80, type: "tick" },
  { id: "megacursor", name: "megaCursor", cost: 10, value: 2, type: "click" },
];

const Game = () => {
  // TODO: Replace this with React state!
  const [numCookies, setNumCookies] = React.useState(100);
  const [purchasedItems, setPurchasedItems] = React.useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
    megacursor: 0,
  });
  const [cookiesPerClick, setCookiesPerClick] = React.useState(1);
  const [items, setItems] = React.useState(itemsArray);

  const calculateCookiesPerTick = (listOfItems) => {
    let total = 0;
    const filteredItems = items.filter((item) => {
      return item.type === "tick";
    });
    filteredItems.forEach((item) => {
      total += listOfItems[`${item.id}`] * item.value;
    });

    return total;
  };

  const calculateCookiesPerClick = () => {
    let numToAdd = purchasedItems["megacursor"] * 2;
    console.log("num to Add", numToAdd);
    return numToAdd;
  };

  const addOneCookie = () => {
    setNumCookies(numCookies + cookiesPerClick);
  };

  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerTick(purchasedItems);
    setNumCookies(numCookies + numOfGeneratedCookies);
  }, 1000);

  React.useEffect(() => {
    const numbOfCookiesPerClick = calculateCookiesPerClick();
    setCookiesPerClick(1 + numbOfCookiesPerClick);
  }, [purchasedItems]);

  useDocumentTitle(`${numCookies} cookies`, `Click that COOKIE`);

  useKeydown("Space", addOneCookie);

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          {/* TODO: Calcuate the cookies per second and show it here: */}
          <strong>{calculateCookiesPerTick(purchasedItems)}</strong> cookies per
          second
        </Indicator>
        <Button
          onClick={(event) => {
            event.preventDefault();
            setNumCookies(numCookies + cookiesPerClick);
          }}
        >
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {items.map((item, index) => {
          let isFirst;
          if (index === 0) {
            isFirst = true;
          }
          return (
            <Item
              key={item.name + index}
              isFirst={isFirst}
              name={item.name}
              cost={item.cost}
              value={item.value}
              type={item.type}
              numOwned={purchasedItems[item.id]}
              handleClick={() => {
                if (item.cost > numCookies) {
                  window.alert("Not enough cookies to buy!");
                } else {
                  setNumCookies(numCookies - item.cost);
                  const updatedObject = {
                    ...purchasedItems,
                    [item.id]: purchasedItems[`${item.id}`] + 1,
                  };
                  setPurchasedItems(updatedObject);
                  const newItemsArray = items.map((item, index2) => {
                    if (index2 === index) {
                      item.cost = Math.round(item.cost * 1.25);
                      return item;
                    } else {
                      return item;
                    }
                  });
                  setItems(newItemsArray);
                }
              }}
            ></Item>
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
