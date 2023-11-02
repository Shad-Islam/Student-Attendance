import React from "react";
import AllStudentList from "./AllStudentList";
import AbsentStudentList from "./AbsentStudentList";
import PresentStudentList from "./PresentStudentList";

function StudentSection(props) {
  // toggole handler
  const toggleHandler = (student) => {
    const newStudentList = props.studentList.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: !student.isPresent };
      }
      return item;
    });
    props.setStudentList(newStudentList);
  };
  return (
    <>
      <div className="studentSection">
        <AllStudentList
          studentList={props.studentList}
          setEditMode={props.setEditMode}
          setStudentList={props.setStudentList}
          setStudentName={props.setStudentName}
          setEditAbleStudent={props.setEditAbleStudent}
        />
        {/* <PresentStudentList
          toggleHandler={toggleHandler}
          studentList={props.studentList}
        /> */}
        <AbsentStudentList
          toggleHandler={toggleHandler}
          studentList={props.studentList}
        />
      </div>
    </>
  );
}

export default StudentSection;
