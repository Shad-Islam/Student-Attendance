import React from "react";
import AllStudentList from "./AllStudentList";
import AbsentStudentList from "./AbsentStudentList";
import PresentStudentList from "./PresentStudentList";
import { useContext } from "react";
import StudentContext from "../context/StudentProvider";

function StudentSection() {
  const StudentContextValue = useContext(StudentContext);
  // toggole handler
  const toggleHandler = (student) => {
    const newStudentList = StudentContextValue.studentList.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: !student.isPresent };
      }
      return item;
    });
    StudentContextValue.setStudentList(newStudentList);
  };
  return (
    <>
      <div className="studentSection">
        <AllStudentList />
        <PresentStudentList toggleHandler={toggleHandler} />
        <AbsentStudentList toggleHandler={toggleHandler} />
      </div>
    </>
  );
}

export default StudentSection;
