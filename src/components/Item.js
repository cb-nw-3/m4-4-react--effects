import React from 'react';
import styled from 'styled-components';

const Item = (props) => {
console.log(props);
  return (
    <SingleItem>
      <Description>
        <Name>{props.name}</Name>
        <Cost>Cost: {props.cost} cookies. Produces {props.value} cookies/second </Cost>
      </Description>
      <Amount>{props.numOwned}</Amount>
    </SingleItem>
  )
};

const SingleItem = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 500px;
  height: 15%;
  border: none;
  border-bottom: 1px solid grey;
  color: white;
  background-color: #222;
`;
const Description = styled.div`
  display:flex;
  flex-direction: column;
  margin-right: 10px;
  flex:4;
`
const Name = styled.p`
  display: block;
  font-size: 32px;
  font-weight: bold;
  text-align:left;
`;
const Cost = styled.p`
  display: block;
  font-size: 14px;
  color: lightgrey;
  text-align: left;
`;
const Amount = styled.p`
  font-size: 32px;
  text-align:right;
  flex: 1;
`;

export default Item;