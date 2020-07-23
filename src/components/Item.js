import React from "react";

const Item = ({ name, numOwned, handleClick }) => {
  return <button onClick={handleClick}>{name}</button>;
};

export default Item;
