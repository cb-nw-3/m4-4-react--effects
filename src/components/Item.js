import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 600px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #575757;
`

const ItemDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ItemNum = styled.div`
    font-size: 30px;
`
const ItemName = styled.button`
    background: rgba(0,0,0,0);
    border: 0;
    font-size: 30px;
    color: white;
    text-align: left;
    padding: 0;
    margin: 0;
`

const Item = ({ itemData, numOwned, handleClick }) => {

    const ref = React.useRef(null);

    React.useEffect(() => {
        if (isFirst === true) {
            ref.current.focus();
        }
    });

    return (
        itemData.map((item, index) => {

            let isFirst = index === 0;

            return (
                <Wrapper>
                    < ItemDesc >
                        <ItemName key={item.id} onClick={() => handleClick(item)}>{item.name}</ItemName>
                        <p>Cost: {item.cost} cookie(s). Produces {item.value} cookies/second.</p>
                    </ItemDesc >
                    <ItemNum>
                        {numOwned[item.id]}
                    </ItemNum>
                </Wrapper>
            )
        })
    )
}

export default Item;