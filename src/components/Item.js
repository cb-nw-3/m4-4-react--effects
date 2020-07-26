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
            {name}
          
        </Wrapper>
    );

};

const Wrapper = styled.button`
    background: transparent;
    border: none;
    color: white;
    padding: 15px;
`
export default Item;

