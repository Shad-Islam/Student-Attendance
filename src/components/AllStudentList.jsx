import React from "react";
import { useContext } from "react";
import { StudentContext } from "../context/StudentProvider";

function AllStudentList() {
  const StudentContextValue = useContext(StudentContext);
  // Edit student
  const editHandler = (student) => {
    StudentContextValue.setEditMode(true);
    StudentContextValue.setStudentName(student.name);
    StudentContextValue.setEditAbleStudent(student);
  };

  // Remove student
  const removeHandler = (studentId) => {
    const newStudentList = StudentContextValue.studentList.filter(
      (student) => studentId !== student.id
    );
    StudentContextValue.setStudentList(newStudentList);
  };

  // make present
  const makePresentHandler = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      return alert("THe student is already in a list");
    }
    const newStudentList = StudentContextValue.studentList.map((item) => {
      if (student.id === item.id) {
        return { ...item, isPresent: true };
      }
      return item;
    });
    StudentContextValue.setStudentList(newStudentList);
  };
  // make absent
  const makeAbsentHandler = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      return alert("THe student is already in a list");
    }
    const newStudentList = StudentContextValue.studentList.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: false };
      }
      return item;
    });
    StudentContextValue.setStudentList(newStudentList);
  };
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
