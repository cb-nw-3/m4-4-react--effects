import React from "react";

const useDocumentTitle = (title, fallbackTitle) => {
  React.useEffect(() => {
    document.title = title;

    return () => {
      document.title = fallbackTitle;
    };
  }, [title, fallbackTitle]);
};

export default useDocumentTitle;
