import React, { useRef, useEffect } from "react";
import Memo from "./Memo";

function Ref(props) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Memo
      {...props}
      inputRef={inputRef}
    />
  );
}

export default Ref;