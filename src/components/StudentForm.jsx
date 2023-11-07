import React from "react";
import { useContext } from "react";
import { StudentContext } from "../context/StudentProvider";

export const StudentForm = () => {
  const StudentContextValue = useContext(StudentContext);

  return (
    <div>
      <form
        className="student-form"
        onSubmit={StudentContextValue.submitHandler}
      >
        <input
          type="text"
          value={StudentContextValue.studentName}
          onChange={(e) => {
            StudentContextValue.setStudentName(e.target.value);
          }}
        />
        <button type="submit" className="create-edit-btn">
          {StudentContextValue.editMode ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
};
