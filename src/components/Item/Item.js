import React from "react";
import styled from "styled-components";

const Item = ({ name, cost, value }) => {
  return (
    <Wrapper>
      <ItemWrapper>
        <ItemName>{name}</ItemName>
        <ItemDescription>
          Cost: {cost} cookie(s). Produces {value} cookies/second
        </ItemDescription>
      </ItemWrapper>
      <ItemCount>0</ItemCount>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 15px 15px 15px 0;
  border-bottom: 1px solid grey;

  &:hover {
    /* just to make it visible */
    outline: 1px solid red;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
`;

const ItemName = styled.h1``;

const ItemDescription = styled.h3`
  color: grey;
`;

const ItemCount = styled.h1`
  font-size: 3rem;
  margin: 0 20px 0 50px;
`;

export default Item;
