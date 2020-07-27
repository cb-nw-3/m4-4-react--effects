import React from "react";
import styled from "styled-components";

const Item = ({ name, items, handleClick, cost, value, numOwned }) => {
    const buttonRef = React.useRef(null);

    React.useEffect(() => {
        if (name === items[0].name) {
            buttonRef.current.focus();
        }
    }, []);

    return (
        <Wrapper ref={buttonRef} onClick={handleClick}>
            <Name>{name}</Name>
            <Cost>Cost: {cost} cookies. Produces {value} cookies/second.</Cost>
            <NumOwned>{numOwned}</NumOwned>
          
        </Wrapper>
        
    );

};

const Wrapper = styled.button`
    background: transparent;
    border: none;
    color: white;
    padding: 15px;
    text-align: left;
`

const Name = styled.div`
    font-size: 22px;
`

const Cost = styled.div`

`

const NumOwned = styled.div`
    font-size: 22px;
    color: yellow;
`
export default Item;

