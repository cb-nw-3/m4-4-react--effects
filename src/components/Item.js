import React from 'react';
import styled from 'styled-components';

const Item = (props) => {
  const ref = React.useRef(null);
  let firstNameRef = 0;
  // console.log(ref);
  React.useEffect(() => {
    if (props.index === firstNameRef) {
      ref.current.focus();
    }
  }, []);

  return (
    <SingleItem 
    onClick={props.handleClick}
    ref={ref}
    >
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
  background: transparent;
  border: none;
  border-bottom: 1px solid grey;
  color: white;
  background-color: #222;
  &:hover{
      cursor: pointer;
  }
  &:focus{
      border: 5px solid blue;
  }
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