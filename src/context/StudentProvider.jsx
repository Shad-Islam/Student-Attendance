import { useState } from "react";
import { createContext } from "react";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  // states
  const [studentName, setStudentName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [editAbleStudent, setEditAbleStudent] = useState(null);

  // handlers
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

  // submit handler
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

  const contextValue = {
    editMode,
    setEditMode,
    studentName,
    studentList,
    setStudentList,
    setStudentName,
    editAbleStudent,
    setEditAbleStudent,
    editHandler,
    createHandler,
    removeHandler,
    submitHandler,
    updateHandler,
    makeAbsentHandler,
    makePresentHandler,
  };
  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
