import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 600px;
    justify-content: space-between;
    align-items: center;
`

const ItemDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ItemNum = styled.div`
    font-size: 30px;
`

const Item = (props) => {
    console.log(props.data);
    return (
        <Wrapper>
            <ItemDesc>
                <h1>{props.data.name}</h1>
                <p>Cost: {props.data.cost} cookie(s). Produces {props.data.value} cookies/second.</p>
            </ItemDesc>
            <ItemNum>
                SomeNum
            </ItemNum>
        </Wrapper>
    )
};

export default Item;