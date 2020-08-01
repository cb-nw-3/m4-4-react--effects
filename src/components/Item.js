import React from 'react';

import styled from 'styled-components';

const Item = ({ name, cost, value, numOwned, handleClick }) => {
    return (
        <Wrapper onClick={handleClick}>
            <LineItem>
                <Name>{name}</Name>
                <Details>
                    Cost: {cost} cookie(s). Produce {value} cookies/second.
                </Details>
            </LineItem>
            <BigNumber>{numOwned}</BigNumber>
        </Wrapper>
    );
};

const Wrapper = styled.button`
    display: flex;
    width: 25vw;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid grey;
    padding: 0;
    align-items: center;
`;

const LineItem = styled.div`
    padding: 10px 0 10px;
    text-align: left;
    width: 100%;
`;

const Name = styled.div`
    font-size: 1.4em;
    color: white;
`;

const Details = styled.div`
    color: grey;
    font-size: 1em;
`;

const BigNumber = styled.span`
    font-size: 2em;
    color: white;
`;

export default Item;
