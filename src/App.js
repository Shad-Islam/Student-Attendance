import React, { useState } from "react";
import "./App.css";
import { StudentForm } from "./components/StudentForm";
import AllStudentList from "./components/AllStudentList";
import PresentStudentList from "./components/PresentStudentList";
import AbsentStudentList from "./components/AbsentStudentList";

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

  // make present
  const makePresentHandler = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      return alert("THe student is already in a list");
    }
    const newStudentList = studentList.map((item) => {
      if (student.id === item.id) {
        return { ...item, isPresent: true };
      }
      return item;
    });
    setStudentList(newStudentList);
  };
  // make absent
  const makeAbsentHandler = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      return alert("THe student is already in a list");
    }
    const newStudentList = studentList.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: false };
      }
      return item;
    });
    setStudentList(newStudentList);
  };

  // toggole handler
  const toggleHandler = (student) => {
    const newStudentList = studentList.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: !student.isPresent };
      }
      return item;
    });
    setStudentList(newStudentList);
  };

  return (
    <>
      <div className="student-form-container">
        <StudentForm />
        <div className="studentSection">
          <AllStudentList />
          <PresentStudentList />
          <AbsentStudentList />
        </div>
      </div>
    </>
  );
}

export default App;
