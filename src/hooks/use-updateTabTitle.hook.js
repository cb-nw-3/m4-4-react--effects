import React from 'react';

function useRefreshTabTitle(title) {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useRefreshTabTitle;