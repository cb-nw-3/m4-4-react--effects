import React from 'react';

import styled from 'styled-components';

function Item(props) {
  const amountOfItems = props.purchasedItems[props.item.id];
  const itemDefaultValue = props.item.value;
  const itemValue = props.purchasedItems[props.item.id] * props.item.value;

  const firstItem = React.useRef(null);

  React.useEffect(() => {
    if (props.firstItem === 'cursor') {
      console.log(props.item.id);
      firstItem.current.focus();
    }  
  }, []);
  
  return <NameContainer onClick={props.handleClick} ref={firstItem}>
      <Left>
        <Name>{props.item.name}</Name>
        <Info>
          Cost: {props.item.cost} cookie(s) 
          Produce: {amountOfItems === 0 ? itemDefaultValue : itemValue} cookies/second
        </Info>
      </Left>
      <Count>{props.numOwned}</Count>
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