import React from 'react';

import styled from 'styled-components';

function Item(props) {
  console.log(props)
  return <NameContainer>
      <div>
        <Name>{props.item.name}</Name>
        <Info>Cost: {props.item.cost} cookie(s) Produce: {props.item.value} cookies/second</Info>
      </div>
      <Count>{props.numOwned}</Count>
    </NameContainer>
}

const Name = styled.p`
  color: lightgray;
  width: 350px;
  height: 30px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
`
const NameContainer = styled.div`
  display: flex;
  border-bottom: 2px solid gray;
`
const Info = styled.p`
  color: gray;
  height: 30px;
`
const Count = styled.p`
  color: gray;
  width: 30px;
  height: 60px;
  font-size: 36px;
  text-align: center;
  line-height: 60px;
`

export default Item