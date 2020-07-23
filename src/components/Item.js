import React from "react";

const Item = ({ name, items, handleClick }) => {
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    if (name === items[0].name) {
      buttonRef.current.focus();
    }
  });

  return (
    <button ref={buttonRef} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Item;
