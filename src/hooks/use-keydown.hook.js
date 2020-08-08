import React from "react";

const function useKeydown(space, callback) {
    React.useEffect(() => {
        const handleKeydown = (ev) => {
          if (ev.code === code) {
            callback(ev);
          }
        };if (ev.code === "Space") {
    callback(ev);
  }
}

window.addEventListener("keydown", handleKeydown);

export default keydown;
