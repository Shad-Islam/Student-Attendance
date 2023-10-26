import React from "react";

function AbsentStudentList(props) {
  return (
    <>
      <div className="list absentStudentList">
        <h2>Absent Student List</h2>
        <ul>
          {props.studentList
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
