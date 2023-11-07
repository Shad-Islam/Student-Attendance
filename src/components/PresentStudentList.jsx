import React from "react";
import { useContext } from "react";
import { StudentContext } from "../context/StudentProvider";

function PresentStudentList() {
  const StudentContextValue = useContext(StudentContext);

  return (
    <>
      <div className="list presentStudentList">
        <h2>Present Student List</h2>
        <ul>
          {StudentContextValue.studentList
            .filter((student) => student.isPresent === true)
            .map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <button
                  onClick={() => {
                    StudentContextValue.toggleHandler(item);
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
