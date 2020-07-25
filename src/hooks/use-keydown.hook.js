import React from "react";

// Takes two arguments key: the key.code for the keyboard, and a callback
//function
function useKeydown(key, callback) {
  React.useEffect(() => {
    function handleKeydown(event) {
      if (event.code === key) {
        callback();
      }
    }
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });
}

export default useKeydown;
