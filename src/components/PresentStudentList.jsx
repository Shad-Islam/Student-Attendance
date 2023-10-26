import React from "react";

function PresentStudentList(props) {
  return (
    <>
      <div className="list presentStudentList">
        <h2>Present Student List</h2>
        <ul>
          {props.studentList
            .filter((student) => student.isPresent === true)
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

export default PresentStudentList;
