import React from 'react';

const useKeydown = (code, callback) => {
  React.useEffect(() => {
    function handleKeydown(ev) {
      if (ev.code === code) {
        callback(ev)
      }
    }
    window.addEventListener('keydown', handleKeydown)    
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  })
}
export default useKeydown;

// React.useEffect(() => {
//     function handleKeydown(ev) {
//       if (ev.code === 'Space') {
//         setNumCookies(numCookies + 1);
//       }
//     }
//     window.addEventListener('keydown', handleKeydown)

//     return () => {
//       window.removeEventListener('keydown', handleKeydown)
//     }
//   }, [numCookies])
  