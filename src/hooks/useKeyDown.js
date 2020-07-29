import React, { useEffect } from "react";

export default function useKeydown(code, callback) {

    useEffect(()=>{
        const handleKeyDown = (ev) => {
            if (ev.code === code) {
              callback();
            }

            window.addEventListener("keydown", handleKeyDown);
            return () => {
                window.removeEventListener("keydown", handleKeyDown);
              }
    }
}
    )