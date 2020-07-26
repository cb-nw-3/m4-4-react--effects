import React from 'react';

function useRefreshTabTitle(title) {
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return title
}

export default useRefreshTabTitle;
