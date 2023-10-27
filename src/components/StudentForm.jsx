import React from "react";

export const StudentForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (!props.studentName) {
      return alert("Please enter a student's name");
    }
    props.editMode ? updateHandler() : createHandler();
  };

  // Create student
  const createHandler = () => {
    const newStudent = {
      id: Date.now() + "",
      name: props.studentName,
      isPresent: undefined,
    };
    props.setStudentList([...props.studentList, newStudent]);
    props.setStudentName("");
  };

  // Update student
  const updateHandler = () => {
    const updateStudentList = props.studentList.map((student) => {
      if (student.id === props.editAbleStudent.id) {
        return { ...student, name: props.studentName };
      }
      return student;
    });
    props.setStudentList(updateStudentList);
    props.setEditAbleStudent(null);
    props.setStudentName("");
    props.setEditMode(false);
  };
  return (
    <div>
      <form className="student-form" onSubmit={submitHandler}>
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
