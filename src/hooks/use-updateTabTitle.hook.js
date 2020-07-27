import React from 'react';

function useRefreshTabTitle(title, callbackTitle) {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return () => {
    document.title = callbackTitle;
  }
}

export default useRefreshTabTitle;