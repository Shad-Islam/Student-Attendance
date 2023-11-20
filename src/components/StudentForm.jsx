import React from "react";
import { useContext } from "react";
import { StudentContext } from "../context/StudentProvider";

export const StudentForm = () => {
  const { studentStates, dispatch } = useContext(StudentContext);

  const submitHandler = (e) => {
    e.preventDefault();
    studentStates.editMode
      ? dispatch({
          type: "UPDATE_STUDENT",
          payload: {
            studentID: studentStates.editAbleStudent.id,
            propertyName: "name",
            propertyValue: studentStates.studentName,
          },
        })
      : dispatch({ type: "CREATE_STUDENT" });
  };
  return (
    <div>
      <form className="student-form" onSubmit={submitHandler}>
        <input
          type="text"
          value={studentStates.studentName}
          onChange={(e) => {
            dispatch({ type: "CHANGE_STUDENT_NAME", payload: e.target.value });
          }}
        />
        <button type="submit" className="create-edit-btn">
          {studentStates.editMode ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
};
