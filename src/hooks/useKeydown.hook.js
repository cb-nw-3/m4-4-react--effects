import React from "react";

const useKeydown = (code, callback) => {
  let handleKeyDown = (event) => {
    if (event.code === code) {
      callback();
    }
  };
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
};

export default useKeydown;
