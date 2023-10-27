import React from "react";

function AllStudentList(props) {
  // Edit student
  const editHandler = (student) => {
    props.setEditMode(true);
    props.setStudentName(student.name);
    props.setEditAbleStudent(student);
  };

  // Remove student
  const removeHandler = (studentId) => {
    const newStudentList = props.studentList.filter(
      (student) => studentId !== student.id
    );
    props.setStudentList(newStudentList);
  };

  // make present
  const makePresentHandler = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      return alert("THe student is already in a list");
    }
    const newStudentList = props.studentList.map((item) => {
      if (student.id === item.id) {
        return { ...item, isPresent: true };
      }
      return item;
    });
    props.setStudentList(newStudentList);
  };
  // make absent
  const makeAbsentHandler = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      return alert("THe student is already in a list");
    }
    const newStudentList = props.studentList.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: false };
      }
      return item;
    });
    props.setStudentList(newStudentList);
  };
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
                  editHandler(student);
                }}
              >
                edit
              </button>
              <button
                onClick={() => {
                  removeHandler(student.id);
                }}
              >
                remove
              </button>
              <button onClick={() => makePresentHandler(student)}>
                make present
              </button>
              <button onClick={() => makeAbsentHandler(student)}>
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
