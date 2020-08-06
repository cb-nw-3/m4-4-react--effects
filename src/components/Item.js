import React from 'react'
import styled from 'styled-components'

const Item = (props) => {
    return (
        <Wrapper
        onClick = {props.handleClick}>
            <ItemInfo>
            <ItemName>{props.name}</ItemName>
                <ItemDescription>{`Cost: ${props.cost} cookie(s). Produces ${props.value} cookies/second.`}</ItemDescription>
            </ItemInfo>
            {/* THIS IS WRONG */}
            <ItemCounter>{props.numOwned}</ItemCounter>
        </Wrapper>
        )

}

const Wrapper = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    background: transparent;
    color: white;
    border: none;
    border-bottom: 1px solid grey;
    padding: 15px 0 15px 0;
`

const ItemName = styled.h2`
`

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ItemDescription = styled.p`
`

const ItemCounter = styled.h2`
    font-size: 35px;
`

export default Item;