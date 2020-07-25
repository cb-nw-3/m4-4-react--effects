import React from "react";

const useKeyDown = (code, callback) => {
  React.useEffect(() => {
    const handleKeyDown = (ev) => {
      if (ev.code === code) {
        callback();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
};

export default useKeyDown;
