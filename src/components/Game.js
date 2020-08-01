import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import cookieSrc from "../cookie.svg";
import Item from "./Item.js";
import useInterval from "../hooks/use-interval.hook";
import handleGenericKeyPress from "../../src/hooks/handleGenericKeyPress.hook";
import useKeydown from "../hooks/use-keydown.hook";
import useDocumentTitle from "../hooks/useDocumentTitle.hook";

import {
  ItemButton,
  Wrapper,
  GameArea,
  Button,
  Cookie,
  ItemArea,
  SectionTitle,
  Indicator,
  Total,
  HomeLink,
} from "./styles/GameStyles.js";
import useDave from "../../src/hooks/use-dave.hook.js";

let items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1, method: "tick" },
  { id: "grandma", name: "Grandma", cost: 100, value: 10, method: "tick" },
  { id: "farm", name: "Farm", cost: 1000, value: 80, method: "tick" },
  {
    id: "megaCursor",
    name: "MegaCursor",
    cost: 100,
    value: 2,
    method: "click",
  },
];

const Game = () => {
  const [numCookies, setCookies] = React.useState(100);

  const [purchasedItems, setPurchasedItems] = React.useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
    megaCursor: 0,
  });

  const [cookiesPerSecond, setCookiesPerSecond] = React.useState(0);
  const [cookiesPerClick, setCookiesPerClick] = React.useState(1);

  function IncreaseCookie() {
    setCookies(numCookies + 1);
  }

  // why does this work?  I'm not setting title except for here... seems like it's weird a hook
  useDocumentTitle({
    title: `${numCookies} cookies - Cookie Clicker Workshop`,
    fallbackTitle: `Cookie Clicker`,
  });

  useKeydown("Space", IncreaseCookie);

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
    console.log("------");

    let extra_cookies = purchasedItems.megaCursor * 2;
    setCookies(numCookies + 1 + extra_cookies);
  }

  function HandleItemClick(event) {
    // console.log(event.target.parentNode.className);
    let item_from_items_list = items.find(
      (e) => e.id === event.target.parentNode.className
    );
    // console.log(item_from_items_list);

    if (item_from_items_list.cost <= numCookies) {
      let item_index = items.findIndex((i) => i.id === item_from_items_list.id);

      if (item_from_items_list.id === "cursor") {
        purchasedItems.cursor = purchasedItems.cursor + 1;
        setCookies(numCookies - item_from_items_list.cost);
      } else if (item_from_items_list.id === "grandma") {
        purchasedItems.grandma = purchasedItems.grandma + 1;
        setCookies(numCookies - item_from_items_list.cost);
      } else if (item_from_items_list.id === "farm") {
        purchasedItems.farm = purchasedItems.farm + 1;
        setCookies(numCookies - item_from_items_list.cost);
      } else if (item_from_items_list.id === "megaCursor") {
        purchasedItems.megaCursor = purchasedItems.megaCursor + 1;
        setCookiesPerClick(cookiesPerClick + item_from_items_list.value);
        setCookies(numCookies - item_from_items_list.cost);
      }
      let cost = Math.floor(items[item_index].cost * 1.4);
      items[item_index].cost = cost;
      console.log(cost);

      setPurchasedItems({
        cursor: purchasedItems.cursor,
        grandma: purchasedItems.grandma,
        farm: purchasedItems.farm,
        megaCursor: purchasedItems.megaCursor,
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
          <p>
            <strong>{cookiesPerClick}</strong> cookies per click
          </p>
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

export default Game;
