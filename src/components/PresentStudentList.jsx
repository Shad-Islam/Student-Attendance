import React from "react";
import { useContext } from "react";
import { StudentContext } from "../context/StudentProvider";

function PresentStudentList() {
  const { studentStates, dispatch } = useContext(StudentContext);

  return (
    <>
      <div className="list presentStudentList">
        <h2>Present Student List</h2>
        <ul>
          {studentStates.studentList
            .filter((student) => student.isPresent === true)
            .map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <button
                  onClick={() => {
                    dispatch({
                      type: "UPDATE_STUDENT",
                      payload: {
                        studentID: item.id,
                        propertyName: "isPresent",
                        propertyValue: !item.isPresent,
                      },
                    });
                  }}
                >
                  Accidentally Added
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default PresentStudentList;
