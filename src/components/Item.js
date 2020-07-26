import React from "react";
import styled from "styled-components";

const Item = ({ name, numOwned, handleClick }) => {
    return <button onClick={handleClick}>{name}</button>;

};

export default Item;

