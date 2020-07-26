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

const Item = ({ itemData, purchasedItems }) => {
    return (
        itemData.map(item => {
            return (
                <Wrapper>
                    < ItemDesc >
                        <h1>{item.name}</h1>
                        <p>Cost: {item.cost} cookie(s). Produces {item.value} cookies/second.</p>
                    </ItemDesc >
                    <ItemNum>
                        {purchasedItems[item.id]}
                    </ItemNum>
                </Wrapper>
            )
        })
    )
}

export default Item;