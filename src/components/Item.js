import React from "react";
import styled from "styled-components";

const Item = ({ index, name, cost, value, numOwned, handleClick }) => {
  console.log(numOwned);

  const ref = React.useRef(null);
  React.useEffect(() => {
    if (index === 0) {
      ref.current.focus();
    }
  }, []);
  return (
    <>
      <Wrapper onClick={handleClick} ref={ref}>
        <Name>{name}</Name>
        <Cost>Cost: {cost}</Cost>
        <Value>value: {value}</Value>

        <Paragraph>produces: {numOwned}</Paragraph>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  border-bottom: 1px solid #444;
  color: #fff;
  text-align: left;
  padding: 15px 0;
`;

const Name = styled.div`
  color: #ccc;
  flex: 1;
`;

const Cost = styled.div`
  color: #ccc;
  font-size: 15px;
`;

const Value = styled.div`
  color: #ccc;
  font-size: 15px;
`;

const Paragraph = styled.div`
  color: #ccc;
  font-size: 15px;
  padding: 0 20px;
`;
export default Item;
