import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import cookieSrc from "../cookie.svg";
import Item from "../components/Item/Item";

//Hooks
import useInterval from "../hooks/use-interval.hook";
import useKeydown from "../hooks/use-keydown.hook";
import useDocumentTitle from "../hooks/use-documentTitle.hook";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
  { id: "megacursor", name: "Extra Cookie per Click", cost: 2500, value: 0 },
];

const Game = () => {
  // ###################### STATES #################################

  const [numCookies, setNumCookies] = React.useState(100);
  const [purchasedItems, setPurchasedItems] = React.useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
    megacursor: 0,
  });

  // ################# UPDATE COOKIE GENERATION ######################
  function calculateCookiesPerTick(inventory) {
    let total = 0;

    //go through each object key-value pair and calculate the generated
    //cookies which is given by inventory * value
    for (const item in inventory) {
      let add = items.find((i) => i.id === item).value;
      total += inventory[item] * add;
    }
    return total;
  }

  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerTick(purchasedItems);
    // console.log(numOfGeneratedCookies);
    setNumCookies(numCookies + numOfGeneratedCookies);
  }, 1000);

  // ####################### REACT EFFECTS ##################

  //parseFloat() and .toLocaleString('en') converts number to string format
  //with comma seperation by thousands
  useDocumentTitle({
    title: `${parseFloat(numCookies).toLocaleString(
      "en"
    )} - Cookie Clicker Workshop`,
    fallbackTitle: "Cookie Clicker Workshop",
  });

  //this is the custom hook to add cookies by pressing down on space
  const rate = 1 + purchasedItems.megacursor;

  function addCookie() {
    console.log(rate);
    rate === 0
      ? setNumCookies(numCookies + 1)
      : setNumCookies(numCookies + rate);
  }

  React.useEffect(() => {
    console.log(`Current click rate is ${rate}`);
  }, [rate]);

  useKeydown("Space", addCookie);

  // ######################## RENDER REACT APP ######################

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          {/* TODO: Calcuate the cookies per second and show it here: */}
          <strong>{calculateCookiesPerTick(purchasedItems)}</strong> cookies per
          second
        </Indicator>
        <Button onClick={() => addCookie()}>
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {/* TODO: Add <Item> instances here, 1 for each item type. */}
        {items.map((item, index) => (
          <Item
            name={item.name}
            cost={item.cost}
            value={item.value}
            numOwned={purchasedItems[item.id]}
            key={item.id}
            handleClick={() => {
              console.log(`${item.name} was clicked!`);

              // update total cookies
              if (numCookies >= item.cost) {
                setNumCookies(numCookies - item.cost);
                purchasedItems[item.id] += 1; //update prop value

                //update the cost of the item at every purchase
                item.cost += Math.floor(Math.random() * 0.2 * item.cost);
                // console.log(`${item.name} now costs ${item.cost}`);

                setPurchasedItems({ ...purchasedItems }); //update state
              } else {
                window.alert(`Cannot afford ${item.name}!`);
              }
            }}
            index={index}
          />
        ))}
      </ItemArea>
      <HomeLink to="/">Return home</HomeLink>
    </Wrapper>
  );
};

// ##################### STYLING COMPONENTS #######################

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

  &:active {
    transform: scale(1.1);
  }
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
