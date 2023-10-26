import React from "react";

function AllStudentList(props) {
  return (
    <>
      <div className="list allStudentList">
        <h2>All Student List</h2>
        <ul>
          {props.studentList.map((student) => (
            <li key={student.id}>
              <span>{student.name}</span>
              <button
                onClick={() => {
                  props.editHandler(student);
                }}
              >
                edit
              </button>
              <button
                onClick={() => {
                  props.removeHandler(student.id);
                }}
              >
                remove
              </button>
              <button onClick={() => props.makePresentHandler(student)}>
                make present
              </button>
              <button onClick={() => props.makeAbsentHandler(student)}>
                make absent
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AllStudentList;
