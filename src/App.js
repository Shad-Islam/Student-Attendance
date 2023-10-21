import { useState } from "react";
import "./App.css";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [editAbleStudent, setEditAbleStudent] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!studentName) {
      return alert("Please enter a student's name");
    }
    editMode ? createHandler() : updateHandler();
  };

  const removeHandler = (studentId) => {};
  // create student
  const createHandler = () => {
    const newStudent = {
      id: Date.now() + "",
      name: studentName,
      isPresent: undefined,
    };
    setStudentList(...studentList, newStudent);
    setStudentName("");
  };

  // update student
  const updateHandler = () => {
    const updateStudentList = studentList.map((student) => {
      if (student.id === editAbleStudent(student.id)) {
        return { ...student, name: studentName };
      }
      return;
    });
    setStudentList(updateStudentList);
    setEditAbleStudent(null);
    setStudentName("");
    setEditMode(false);
  };

  // edit student
  const editHandler = (student) => {
    setEditMode(true);
    setStudentName(student.name);
    setEditAbleStudent(student);
  };
  return (
    <>
      <div className="student-form-container">
        <form className="student-form" onSubmit={submitHandler}>
          <input
            type="text"
            value={studentName}
            onChange={(e) => {
              setStudentName(e.target.value);
            }}
          />
          {console.log(studentName)}

          <button type="submit">
            {editMode ? "Update Student" : "Add Student"}
          </button>
        </form>
        <div className="studentSection">
          <div className="list allStudentList">
            <h2>All Student List</h2>
            <ul>
              {studentList.map((student) => (
                <i key={student.id}>
                  <span>{student.id}</span>
                  <button
                    onClick={() => {
                      editHandler(student);
                    }}
                  >
                    edit
                  </button>
                  <button
                    onClick={() => {
                      removeHandler(student.id);
                    }}
                  >
                    remove
                  </button>
                  <button>make present</button>
                  <button>make absent</button>
                </i>
              ))}
            </ul>
          </div>
          <div className="list presentStudentList">
            <h2>Present Student List</h2>
          </div>
          <div className="list absentStudentList">
            <h2>Absent Student List</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
