import React from "react";

function handleGenericKeyPress(keyToUse, callback) {
  React.useEffect(() => {
    const handleKeydown = (ev) => {
      if (ev.key === keyToUse) {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });
}

export { handleGenericKeyPress };
