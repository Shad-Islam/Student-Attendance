import React from "react";
import { useContext } from "react";
import { StudentContext } from "../context/StudentProvider";

function AllStudentList() {
  const StudentContextValue = useContext(StudentContext);

  return (
    <>
      <div className="list allStudentList">
        <h2>All Student List</h2>
        <ul>
          {StudentContextValue.studentList.map((student) => (
            <li key={student.id}>
              <span>{student.name}</span>
              <button
                onClick={() => {
                  StudentContextValue.editHandler(student);
                }}
              >
                edit
              </button>
              <button
                onClick={() => {
                  StudentContextValue.removeHandler(student.id);
                }}
              >
                remove
              </button>
              <button
                onClick={() => StudentContextValue.makePresentHandler(student)}
              >
                make present
              </button>
              <button
                onClick={() => StudentContextValue.makeAbsentHandler(student)}
              >
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
