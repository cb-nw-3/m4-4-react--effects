import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Item from "./Item";
import useInterval from "../hooks/use-interval.hook";

import cookieSrc from "../cookie.svg";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];
const subTitle = document.title;
const Game = () => {
  const [numCookies, setNumCookies] = React.useState(1000);
  const [purchasedItems, setPurchasedItems] = React.useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });
  function handleKeydown(ev) {
    if (ev.code === "Space") {
      setNumCookies(numCookies + 1);
    }
  }

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [numCookies]);
  React.useEffect(() => {
    document.title =
      numCookies.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
      " cookies - " +
      subTitle;
  }, [numCookies]);

  function handleClick(id, cost) {
    if (numCookies < cost) {
      alert("Out of cookies Mr. " + id);
    } else {
      setPurchasedItems({ ...purchasedItems, [id]: purchasedItems[id] + 1 });
      setNumCookies(numCookies - cost);
    }
  }

  const calculateCookiesPerTick = (purchasedItems) => {
    let totalCookies = 0;
    items.forEach((item) => {
      totalCookies += item.value * purchasedItems[item.id];
    });
    return totalCookies;
  };

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
        <Button
          onClick={() => {
            setNumCookies(numCookies + 1);
          }}
        >
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {items.map((element, index) => {
          return (
            <Item
              item={element}
              handleClick={handleClick}
              purchasedValue={purchasedItems[element.id]}
              index={index}
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
  width: 95%;
  margin: 0 auto;
`;
const GameArea = styled.div`
  flex: 4;
  display: grid;
  place-items: center;
`;

const jump = keyframes`
50% {
  transform: scale(0.8);
}
100% {
  transform: scale(1.2);
}
`;
const animation = () =>
  css`
    ${jump} 1s linear;
  `;

const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  &:active {
    animation: ${animation};
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
  flex: 3;
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
