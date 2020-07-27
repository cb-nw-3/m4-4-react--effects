import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import cookieSrc from "../cookie.svg";
import Item from "./Item.js";
import useInterval from "../../src/hooks/use-interval.hook";
import handleGenericKeyPress from "../../src/hooks/handleGenericKeyPress.hook";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

const Game = () => {
  const [numCookies, setCookies] = React.useState(100);
  const [purchasedItems, setPurchasedItems] = React.useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });

  const [cookiesPerSecond, setCookiesPerSecond] = React.useState(0);

  React.useEffect(() => {
    const handleKeyPress = (ev) => {
      console.log(ev.key);
      setCookies(numCookies + 1);
    };

    document.title = `${numCookies} cookies - Cookie Clicker Workshop`;
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      document.title = `Cookie Clicker`;
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [numCookies]);

  function calculateCookiesPerTick() {
    let cursor_cookies = purchasedItems.cursor * 1;
    let grandma_cookies = purchasedItems.grandma * 10;
    let farm_cookies = purchasedItems.farm * 80;
    let cookies_earned = cursor_cookies + grandma_cookies + farm_cookies;

    setCookies(numCookies + cookies_earned);
    setCookiesPerSecond(cookies_earned);
  }

  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerTick(purchasedItems);

    // Add this number of cookies to the total
  }, 1000);

  function HandleCookieClick(event) {
    setCookies(numCookies + 1);
  }

  function HandleItemClick(event) {
    // console.log(event.target.parentNode.className);
    let item_from_items_list = items.find(
      (e) => e.id === event.target.parentNode.className
    );
    // console.log(item_from_items_list);

    if (item_from_items_list.cost <= numCookies) {
      if (item_from_items_list.id === "cursor") {
        purchasedItems.cursor = purchasedItems.cursor + 1;
        setCookies(numCookies - item_from_items_list.cost);
      } else if (item_from_items_list.id === "grandma") {
        purchasedItems.grandma = purchasedItems.grandma + 1;
        setCookies(numCookies - item_from_items_list.cost);
      } else if (item_from_items_list.id === "farm") {
        purchasedItems.farm = purchasedItems.farm + 1;
        setCookies(numCookies - item_from_items_list.cost);
      }
      setPurchasedItems({
        cursor: purchasedItems.cursor,
        grandma: purchasedItems.grandma,
        farm: purchasedItems.farm,
      });
    }
    console.log(purchasedItems);
  }

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          <strong>{cookiesPerSecond}</strong> cookies per second
        </Indicator>
        <Button onClick={HandleCookieClick}>
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>

        {items.map((item, i) => {
          let isFirst = false;
          if (i === 0) {
            isFirst = true;
          }
          return (
            <div className={item.id}>
              <ItemButton onClick={HandleItemClick}></ItemButton>
              <Item
                item={item}
                purchasedItems={purchasedItems}
                isFirst={isFirst}
              ></Item>
            </div>
          );
        })}
      </ItemArea>
      <HomeLink to="/">Return home</HomeLink>
    </Wrapper>
  );
};

const ItemButton = styled.button`
  background-color: transparent;
  position: absolute;
  width: 380px;
  height: 50px;
  border: 0px;
  z-index: 99;
`;

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
  width: 400px;
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
