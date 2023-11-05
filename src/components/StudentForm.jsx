import React from "react";
import { useContext } from "react";
import StudentContext from "../context/StudentProvider";

export const StudentForm = () => {
  const StudentContextValue = useContext(StudentContext);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (!StudentContextValue.studentName) {
      return alert("Please enter a student's name");
    }
    StudentContextValue.editMode ? updateHandler() : createHandler();
  };

  // Create student
  const createHandler = () => {
    const newStudent = {
      id: Date.now() + "",
      name: StudentContextValue.studentName,
      isPresent: undefined,
    };
    StudentContextValue.setStudentList([
      ...StudentContextValue.studentList,
      newStudent,
    ]);
    StudentContextValue.setStudentName("");
  };

  // Update student
  const updateHandler = () => {
    const updateStudentList = StudentContextValue.studentList.map((student) => {
      if (student.id === StudentContextValue.editAbleStudent.id) {
        return { ...student, name: StudentContextValue.studentName };
      }
      return student;
    });
    StudentContextValue.setStudentList(updateStudentList);
    StudentContextValue.setEditAbleStudent(null);
    StudentContextValue.setStudentName("");
    StudentContextValue.setEditMode(false);
  };
  return (
    <div>
      <form className="student-form" onSubmit={submitHandler}>
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
