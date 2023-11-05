import { useState } from "react";
import { createContext } from "react";

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [studentName, setStudentName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [editAbleStudent, setEditAbleStudent] = useState(null);

  const contextValu = {
    editMode,
    setEditMode,
    studentName,
    studentList,
    setStudentList,
    setStudentName,
    editAbleStudent,
    setEditAbleStudent,
  };
  return (
    <StudentContext.Provider value={contextValu}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
