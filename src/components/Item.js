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

const Item = ({ items, purchasedItems }) => {
  return (
    <List>
      {items.map((item) => {
        return (
          <ListItem key={item.id}>
            <ItemInfo>
              <h3>{item.name}</h3>
              <span>
                Cost: {item.cost} cookie(s). Produces {item.value}{" "}
                cookies/second.
              </span>
            </ItemInfo>
            <ItemCounter>{purchasedItems[item.id]}</ItemCounter>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Item;
