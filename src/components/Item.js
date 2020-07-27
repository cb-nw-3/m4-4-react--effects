import React from 'react';

import styled from 'styled-components';

function Item(props) {
  const amountOfItems = props.purchasedItems[props.item.id];
  const itemDefaultValue = props.item.value;
  const itemValue = props.purchasedItems[props.item.id] * props.item.value;

  const firstItem = React.useRef(null);

  let infoSection;

  if (props.item.id !== 'megaClick') {
    infoSection = <Info>
      Cost: {props.item.cost} cookie(s) 
      Produce: {amountOfItems === 0 ? itemDefaultValue : itemValue} cookies/second
    </Info>
  } else {
    infoSection = <Info>
      Cost: {props.item.cost} cookie(s) 
      Modification: {amountOfItems === 0 ? 1 : amountOfItems} X click
    </Info>
  }

  React.useEffect(() => {
    if (props.firstItem === 'cursor') {
      firstItem.current.focus();
    }
  });
  
  return <NameContainer onClick={props.handleClick} ref={firstItem}>
      <Left>
        <Name>{props.item.name}</Name>
        {infoSection}
      </Left>
      <Count>{props.item.id !== 'megaClick' ? props.numOwned : props.numOwned - 1}</Count>
    </NameContainer>
}

const Left = styled.div`
`
const Name = styled.p`
  color: lightgray;
  width: 350px;
  height: 30px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
`
const NameContainer = styled.button`
  display: flex;
  border: none;
  border-bottom: 2px solid gray;
  text-align: left;
  background: #222;
  padding-left: 0;
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