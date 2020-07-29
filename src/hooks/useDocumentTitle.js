import React, { useEffect } from "react";

export default function useDocumentTitle(title, fallbackTitle) {
  useEffect(() => {
    document.title = title;

    return () => {
      document.title = fallbackTitle;
    };
  }, [title, fallbackTitle]);
}
