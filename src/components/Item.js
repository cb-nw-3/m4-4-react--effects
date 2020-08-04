import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 5px;
`;

const ItemInfo = styled.div`
  flex: 4;
`;

const ItemCounter = styled.div`
  flex: 1;
  font-size: xx-large;
  display: flex;
  align-items: center;
`;

const BtnWrapper = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  color: #fff;
`;

const Item = ({
  items,
  setItems,
  purchasedItems,
  handleClick,
  numCookies,
  setNumCookies,
}) => {
  return (
    <List>
      {items.map((item) => {
        const temp = item.name === "mega" ? "click" : "second";
        return (
          <ListItem key={item.id}>
            <ItemInfo>
              <BtnWrapper
                onClick={() => {
                  if (numCookies >= item.cost) {
                    purchasedItems[item.id] += 1;
                    const newState = { ...purchasedItems };
                    handleClick(newState);
                    setNumCookies(numCookies - item.cost);
                    item.cost = purchasedItems[item.id] ** 2 + item.cost;
                    setItems(items);
                  } else {
                    window.alert("Not enougn cookies");
                  }
                }}
              >
                <h3>{item.name}</h3>
                <span>
                  Cost: {item.cost} cookie(s). Produces {item.value} cookies/
                  {temp}.
                </span>
              </BtnWrapper>
            </ItemInfo>
            <ItemCounter>{purchasedItems[item.id]}</ItemCounter>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Item;
