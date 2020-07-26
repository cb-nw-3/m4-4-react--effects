import React, { useCallback } from 'react';

function useSpaceBar(key, callbackFunction) {
  // create function for the event listener
  function handler(ev) {
    // check key code
    if (ev.code === key) {
      callbackFunction()
  }}
  // do this right after render
  React.useEffect(() => {
    // add event listener 
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    }
  });
}

export default useSpaceBar