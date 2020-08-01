import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Item from "./Item";

import cookieSrc from "../cookie.svg";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

const Game = () => {
  // TODO: Replace this with React state!
  // const numCookies = 100;
  // const purchasedItems = {
  //   cursor: 0,
  //   grandma: 0,
  //   farm: 0,
  // };

  //** ###### functions
  function addCookies() {
    setNumCookies(numCookies + 1);
  }

  //** States
  const [numCookies, setNumCookies] = React.useState(100);
  const [purchasedItems, setPurchasedItems] = React.useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });
  //** States
  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          {/* TODO: Calcuate the cookies per second and show it here: */}
          <strong>0</strong> cookies per second
        </Indicator>
        {/* ** */}
        <Button onClick={addCookies}>
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {/* Ex1 */}
        {items.map((item) => {
          function buyItem() {
            // ** Check if we have enough cookies
            console.log("I was clicked");
            if (numCookies > item.cost) {
              console.log(`I can buy ${item.name}`);
              // ** Updated Cookies
              setNumCookies(numCookies - item.cost);
              // ** Update item count in the object purchasedItems
              // ** purchasedItems[item.id] += 1;
              setPurchasedItems({
                // ** Used "spread" operator to update purchasedItems
                ...purchasedItems,
                [item.id]: purchasedItems[item.id] + 1,
              });
            } else {
              window.alert(`Cannot afford a ${item.name}!`);
            }
          }
          return (
            <Item
              key={item.id}
              name={item.name}
              cost={item.cost}
              value={item.value}
              numOwned={purchasedItems[item.id]}
              handleClick={buyItem}
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
