import React from "react";
import styled from "styled-components";

const Item = ({
  id,
  name,
  cost,
  value,
  purchasedItemCount,
  handlePurchase,
}) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (id === 0) {
      ref.current.focus();
    }
  }, []);

  return (
    <Wrapper ref={ref} onClick={handlePurchase}>
      <Left>
        <h4>{name}</h4>
        <Description>
          Cost: {cost} cookie(s). Produces {value} cookies/second.
        </Description>
      </Left>
      <Right>{purchasedItemCount}</Right>
    </Wrapper>
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

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  font-size: 32px;
  padding: 0 20px;
`;

const Description = styled.div`
  color: #ccc;
  font-size: 15px;
`;

export default Item;
