import React from "react";
import styled from "styled-components";

function Item({ index, name, value, cost, numOwned, handleClick }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (index === 0) {
      ref.current.focus();
    }
  }, []);

  return (
    <Wrapper ref={ref} onClick={handleClick}>
      <div>
        <Name>{name}</Name>
        <Cost>Cost:{cost} cookies</Cost>
        <Product>Produces:{value} cookie per second</Product>
      </div>
      <div>
        <NumOwned>{numOwned}</NumOwned>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  color: #fff;
  text-align: left;
  padding: 10px 0;
`;

const Name = styled.h1`
  color: white;
  font-size: 25px;
`;

const Cost = styled.h1`
  color: white;
  font-size: 15px;
`;

const Product = styled.h1`
  color: white;
  font-size: 15px;
`;

const NumOwned = styled.h1`
  color: turquoise;
  font-size: 25px;
  padding: 0 20px;
`;

export default Item;
