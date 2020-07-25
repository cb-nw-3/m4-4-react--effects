import React from "react";
import styled from "styled-components";

const Item = ({ name, cost, value, numOwned, handleClick, index }) => {
  //this is to focus on the first item only
  const firstItem = React.createRef();

  //does not need to re-run after ever render, hence the [] as the 2nd argument
  React.useEffect(() => {
    if (index === 0) {
      firstItem.current.focus();
    }
  }, []);

  return (
    <Wrapper ref={firstItem} onClick={handleClick}>
      <ItemWrapper>
        <ItemName>{name}</ItemName>
        <ItemDescription>
          Cost: {cost} cookie(s). Produces {value} cookies/second
        </ItemDescription>
      </ItemWrapper>
      <ItemCount>{numOwned}</ItemCount>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  padding: 15px 0px 15px 0;
  border-bottom: 1px solid grey;
  background-color: inherit;
  border: none;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: flex-start;
  width: 500px;
`;

const ItemName = styled.h1`
  color: #fff;
  font-size: 28px;
`;

const ItemDescription = styled.h3`
  color: grey;
  font-size: 18px;
`;

const ItemCount = styled.h1`
  color: #fff;
  font-size: 3rem;
  width: 80px;
  /* margin: 0 20px 0 50px; */
  text-align: center;
`;

export default Item;
