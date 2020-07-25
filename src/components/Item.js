import React from 'react';
import styled from 'styled-components';

const Item = ({ info }) => {
  return (
    <ItemWrapper>
      <div>{info.name}</div>
      <div>
        Cost: {info.cost} cookie(s). Produces {info.value} cookie(s)/second
      </div>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  /* display: flex; */

  border-bottom: 1px solid gray;
  margin-bottom: 15px;
  padding: 10px 0;
  div:first-child {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export default Item;
