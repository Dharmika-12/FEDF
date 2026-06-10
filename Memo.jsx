import React, { useMemo } from "react";
import Callback from "./Callback";

function Memo(props) {
  const totalStudents = useMemo(() => {
    return props.students.length;
  }, [props.students]);

  const totalCharacters = useMemo(() => {
    return props.students.reduce(
      (sum, student) => sum + student.length,
      0
    );
  }, [props.students]);

  return (
    <Callback
      {...props}
      totalStudents={totalStudents}
      totalCharacters={totalCharacters}
    />
  );
}

export default Memo;