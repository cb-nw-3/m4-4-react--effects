import React from "react";

export default function useDocumentTitle({ title, fallbackTitle }) {
  React.useEffect(() => {
    document.title = title;

    console.log("useDocumentTitle fired");
    console.log({ title });

    return () => {
      document.title = fallbackTitle;
    };
  }, [title, fallbackTitle]);
}
