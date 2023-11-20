import React from "react";
import { useContext } from "react";
import { StudentContext } from "../context/StudentProvider";

function AllStudentList() {
  const { studentStates, dispatch } = useContext(StudentContext);

  return (
    <>
      <div className="list allStudentList">
        <h2>All Student List</h2>
        <ul>
          {studentStates.studentList.map((student) => (
            <li key={student.id}>
              <span>{student.name}</span>
              <button
                onClick={() => {
                  dispatch({ type: "EDIT_STUDENT", payload: student });
                }}
              >
                edit
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "REMOVE_STUDENT", payload: student.id });
                }}
              >
                remove
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: "UPDATE_STUDENT",
                    payload: {
                      studentID: student.id,
                      propertyName: "isPresent",
                      propertyValue: true,
                    },
                  })
                }
              >
                make present
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: "UPDATE_STUDENT",
                    payload: {
                      studentID: student.id,
                      propertyName: "isPresent",
                      propertyValue: false,
                    },
                  })
                }
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
