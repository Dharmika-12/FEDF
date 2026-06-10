import React, { useState } from "react";
import Effect from "./Effect";

function State() {
  const [students, setStudents] = useState(["Rahul", "Anu"]);
  const [name, setName] = useState("");

  const addStudent = () => {
    if (name.trim() !== "") {
      setStudents([...students, name]);
      setName("");
    }
  };

  return (
    <Effect
      students={students}
      setStudents={setStudents}
      name={name}
      setName={setName}
      addStudent={addStudent}
    />
  );
}

export default State;