import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import useInterval from '../hooks/use-interval.hook';

import cookieSrc from '../cookie.svg';
import Item from './Item';

const items = [
    { id: 'cursor', name: 'Cursor', cost: 10, value: 1 },
    { id: 'grandma', name: 'Grandma', cost: 100, value: 10 },
    { id: 'farm', name: 'Farm', cost: 1000, value: 80 },
];

const calculateCookiesPerTick = (purchasedItems) => {
    return Object.keys(purchasedItems).reduce((acc, itemId) => {
        const numOwned = purchasedItems[itemId];
        const item = items.find((item) => item.id === itemId);
        const value = item.value;

        return acc + value * numOwned;
    }, 0);
};

const Game = () => {
    const [numCookies, setNumCookies] = React.useState(0);
    const [purchasedItems, setPurchasedItems] = React.useState({
        cursor: 0,
        grandma: 0,
        farm: 0,
    });

    useInterval(() => {
        const numOfGeneratedCookies = calculateCookiesPerTick(purchasedItems);
        setNumCookies(numCookies + numOfGeneratedCookies);
    }, 1000);

    return (
        <Wrapper>
            <GameArea>
                <Indicator>
                    <Total>{numCookies} cookies</Total>
                    <strong>
                        {calculateCookiesPerTick(purchasedItems)}
                    </strong>{' '}
                    cookies per second
                </Indicator>
                <Button onClick={() => setNumCookies(numCookies + 1)}>
                    <Cookie src={cookieSrc} />
                </Button>
            </GameArea>

            <ItemArea>
                <SectionTitle>Items:</SectionTitle>
                {items.map((item) => {
                    const newPurchasedItems = {
                        ...purchasedItems,
                        [item.id]: purchasedItems[item.id] + 1,
                    };

                    return (
                        <Item
                            key={item.id}
                            name={item.name}
                            cost={item.cost}
                            value={item.value}
                            numOwned={purchasedItems[item.id]}
                            handleClick={() => {
                                if (numCookies < item.cost) {
                                    const numOfMissingCookies =
                                        item.cost - numCookies;
                                    alert(
                                        `You don't have enough cookies to afford a ${item.name}. \nGet back to work! You need ${numOfMissingCookies} more cookie(s) to buy it.`
                                    );
                                    return;
                                }
                                setNumCookies(numCookies - item.cost);

                                setPurchasedItems(newPurchasedItems);
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
