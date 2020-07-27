import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Item from './Item';
import cookieSrc from '../cookie.svg';
import useInterval from '../hooks/use-interval.hook';

const items = [
  { id: 'cursor', name: 'Cursor', cost: 10, value: 1 },
  { id: 'grandma', name: 'Grandma', cost: 100, value: 10 },
  { id: 'farm', name: 'Farm', cost: 1000, value: 80 },
];

const Game = () => {
  // TODO: Replace this with React state!
  const [numCookies, setNumCookies] = useState(100);
  const [purchasedItems, setPurchasedItems] = useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });

  // const ref = useRef(null);

  // useEffect(() => {
  //   ref.current.focus();
  // }, []);

  useInterval(() => {
    calculateCookiesPerTick(purchasedItems);

    // Add his number of cookies to the total
  }, 1000);

  const calculateCookiesPerTick = (purchasedItems) => {
    let initialValue = 0;
    const reducer = (accumulator, current) =>
      accumulator + current.value * purchasedItems[current.id];
    const additionalCookies = items.reduce(reducer, initialValue);
    setNumCookies(numCookies + additionalCookies);
  };

  useEffect(() => {
    document.title = `${numCookies} cookies - Cookie Clicker Workshop`;
    return () => {
      document.title = `Cookie Clicker Workshop`;
      //This really does not make any difference in this case
    };
  }, [numCookies]);

  useEffect(() => {
    function handleKeydown(e) {
      if (e.code === 'Space') {
        setNumCookies((n) => n + 1);
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          {/* TODO: Calcuate the cookies per second and show it here: */}
          <strong>0</strong> cookies per second
        </Indicator>
        <Button
          onClick={() => {
            setNumCookies((n) => n + 1);
          }}
        >
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>
      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {items.map((element, index) => (
          <Item
            key={'btn' + index}
            info={element}
            numOwned={purchasedItems[element.id]}
            handleClick={() => {
              if (numCookies < element.cost) {
                alert('Not enough cookies');
                return;
              } else {
                setNumCookies(numCookies - element.cost);
                setPurchasedItems({
                  ...purchasedItems,
                  [element.id]: purchasedItems[element.id] + 1,
                });
              }
            }}
            index={index}
          ></Item>
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
