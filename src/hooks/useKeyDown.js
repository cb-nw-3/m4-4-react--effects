import React from "react";

export default function useKeyDown(code, callback) {
  React.useEffect(() => {
    const handleKeyDown = (ev) => {
      if (ev.code === code) {
        callback(ev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
}
