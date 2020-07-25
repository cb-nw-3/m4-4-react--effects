import React from "react";
import styled from "styled-components";

const Item = ({
    index,
    name,
    cost,
    value,
    numOwned,
    handleClick,
}) => {
    const itemRef = React.useRef()
    React.useEffect(() => {
        if (index === 0) {
            itemRef.current.focus()
        }
    }, []);
    return (
        <Wrapper
            onClick={handleClick}
            onKeyDown={function (ev) {
                ev.stopPropagation();
            }}

            ref={itemRef}
        >
            <Info>
                <Name>{name}</Name>
                <Details>Cost: {cost} cookies. Produces {value} {value === 1 ? 'cookie' : 'cookies'}/second.</Details>
            </Info>
            <NumItems>{numOwned}</NumItems>
        </Wrapper>
    )
}

const Wrapper = styled.button`
    background: none;
    color: white;
    border-left: none;
    border-top: none;
    border-bottom: 2px solid #858585;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    outline: none;

    &:focus{
        box-shadow: 0px 0px 4px 4px darkblue;
        border-radius: 2px;
        border-bottom: 2px solid transparent;
        cursor: pointer;
    }
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-right: 15px;
`

const Name = styled.h3`
  font-size: 22px;
`;

const Details = styled.p`
    font-size: 18px;
    color: #858585;
`

const NumItems = styled.p`
    font-size: 36px;
`

export default Item;