import React, { useState } from "react";
import "./App.css";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [editAbleStudent, setEditAbleStudent] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!studentName) {
      return alert("Please enter a student's name");
    }
    editMode ? updateHandler() : createHandler();
  };

  // Create student
  const createHandler = () => {
    const newStudent = {
      id: Date.now() + "",
      name: studentName,
      isPresent: undefined,
    };
    setStudentList([...studentList, newStudent]);
    setStudentName("");
  };

  // Update student
  const updateHandler = () => {
    const updateStudentList = studentList.map((student) => {
      if (student.id === editAbleStudent.id) {
        return { ...student, name: studentName };
      }
      return student;
    });
    setStudentList(updateStudentList);
    setEditAbleStudent(null);
    setStudentName("");
    setEditMode(false);
  };

  // Edit student
  const editHandler = (student) => {
    setEditMode(true);
    setStudentName(student.name);
    setEditAbleStudent(student);
  };

  // Remove student
  const removeHandler = (studentId) => {
    const newStudentList = studentList.filter(
      (student) => studentId !== student.id
    );
    setStudentList(newStudentList);
  };

  return (
    <>
      <div className="student-form-container">
        <form className="student-form" onSubmit={submitHandler}>
          <input
            type="text"
            value={studentName}
            onChange={(e) => {
              setStudentName(e.target.value);
            }}
          />
          <button type="submit">
            {editMode ? "Update Student" : "Add Student"}
          </button>
        </form>
        <div className="studentSection">
          <div className="list allStudentList">
            <h2>All Student List</h2>
            <ul>
              {studentList.map((student) => (
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
                  <button>make present</button>
                  <button>make absent</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="list presentStudentList">
            <h2>Present Student List</h2>
          </div>
          <div className="list absentStudentList">
            <h2>Absent Student List</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
