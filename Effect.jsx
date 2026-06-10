import React, { useEffect } from "react";
import Ref from "./Ref";

function Effect(props) {
  useEffect(() => {
    document.title = `Students : ${props.students.length}`;
  }, [props.students]);

  return <Ref {...props} />;
}

export default Effect;