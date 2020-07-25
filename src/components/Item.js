import React from 'react';
import styled from 'styled-components';

const Item = ({ info, numOwned }) => {
  return (
    <ItemWrapper>
      <div>
        <div>{info.name}</div>
        <div>
          Cost: {info.cost} cookie(s). Produces {info.value} cookie(s)/second
        </div>
      </div>
      <Score>{numOwned}</Score>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.button`
  display: flex;
  justify-content: space-between;
  border: none;
  border-bottom: 1px solid gray;
  margin-bottom: 15px;
  padding: 10px 0;
  background-color: transparent;
  color: white;
  div {
    text-align: left;
  }
  div > div:first-child {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const Score = styled.div`
  font-size: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export default Item;
