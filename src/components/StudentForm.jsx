import React from "react";

export const StudentForm = (props) => {
  return (
    <div>
      <form className="student-form" onSubmit={props.submitHandler}>
        <input
          type="text"
          value={props.studentName}
          onChange={(e) => {
            props.setStudentName(e.target.value);
          }}
        />
        <button type="submit" className="create-edit-btn">
          {props.editMode ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
};
