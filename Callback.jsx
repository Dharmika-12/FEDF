import React, { useCallback } from "react";

function Callback(props) {
  const deleteStudent = useCallback(
    (index) => {
      props.setStudents(
        props.students.filter((_, i) => i !== index)
      );
    },
    [props.students, props.setStudents]
  );

  return (
    <div>
      <h1>Student Dashboard</h1>

      <input
        ref={props.inputRef}
        type="text"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        placeholder="Enter Student Name"
      />

      <button onClick={props.addStudent}>
        Add Student
      </button>

      <button
        onClick={() => props.inputRef.current.focus()}
      >
        Focus Input
      </button>

      <h3>Total Students: {props.totalStudents}</h3>

      <h3>
        Total Characters: {props.totalCharacters}
      </h3>

      <ul>
        {props.students.map((student, index) => (
          <li key={index}>
            {student}
            <button
              onClick={() => deleteStudent(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Callback;