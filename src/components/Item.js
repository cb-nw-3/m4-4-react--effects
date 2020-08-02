import React from 'react';

import styled from 'styled-components';

const Item = ({ index, name, cost, value, numOwned, handleClick }) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (index === 0) {
            ref.current.focus();
        }
    }, []);

    return (
        <Wrapper ref={ref} onClick={handleClick}>
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
    color: white;
`;

const LineItem = styled.div`
    padding: 10px 0 10px;
    text-align: left;
    width: 100%;
`;

const Name = styled.div`
    font-size: 1.4em;
`;

const Details = styled.div`
    color: grey;
    font-size: 1em;
`;

const BigNumber = styled.span`
    font-size: 2em;
`;

export default Item;
