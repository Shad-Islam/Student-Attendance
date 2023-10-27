import "./App.css";
import React from "react";
import { useState } from "react";
import { StudentForm } from "./components/StudentForm";
import StudentSection from "./components/StudentSection";

function App() {
  const [studentName, setStudentName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [editAbleStudent, setEditAbleStudent] = useState(null);
  return (
    <>
      <div className="student-form-container">
        <StudentForm
          editMode={editMode}
          studentName={studentName}
          studentList={studentList}
          setEditMode={setEditMode}
          setStudentName={setStudentName}
          setStudentList={setStudentList}
          editAbleStudent={editAbleStudent}
          setEditAbleStudent={setEditAbleStudent}
        />
        <StudentSection
          studentList={studentList}
          setEditMode={setEditMode}
          setStudentList={setStudentList}
          setStudentName={setStudentName}
          setEditAbleStudent={setEditAbleStudent}
        />
      </div>
    </>
  );
}
export default App;
