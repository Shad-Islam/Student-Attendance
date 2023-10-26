import React from "react";
import AllStudentList from "./AllStudentList";
import AbsentStudentList from "./AbsentStudentList";
import PresentStudentList from "./PresentStudentList";

function StudentSection() {
  return (
    <>
      <div className="studentSection">
        <AllStudentList />
        <PresentStudentList />
        <AbsentStudentList />
      </div>
    </>
  );
}

export default StudentSection;
