import React from "react";
import styled from "styled-components";

function Item({ name, value, cost, numOwned, handleClick }) {
  return (
    <button onClick={handleClick}>
      <div>
        <h2>{name}</h2>
        <span>Cost:{cost} cookies</span>
        <span>Produces:{value} cookie per second</span>
      </div>
      <div>
        <h2>{numOwned}</h2>
      </div>
    </button>
  );
}

export default Item;
