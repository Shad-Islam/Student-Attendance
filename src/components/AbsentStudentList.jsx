import React from "react";
import { useContext } from "react";
import { StudentContext } from "../context/StudentProvider";
function AbsentStudentList(props) {
  const StudentContextValue = useContext(StudentContext);
  return (
    <>
      <div className="list absentStudentList">
        <h2>Absent Student List</h2>
        <ul>
          {StudentContextValue.studentList
            .filter((student) => student.isPresent === false)
            .map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <button
                  onClick={() => {
                    props.toggleHandler(item);
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

export default AbsentStudentList;
