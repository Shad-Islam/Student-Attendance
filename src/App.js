import { useState } from "react";
import "./App.css";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [studentName, setStudentName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!studentName) {
      return alert("Please enter a student's name");
    }
    editMode ? createHandler() : updateHandler();
  };
  const editHandler = (student) => {};
  const removeHandler = (studentId) => {};
  const createHandler = () => {
    const newStudent = {
      id: Date.now() + "",
      name: studentName,
      isPresent: undefined,
    };
    setStudentList(...studentList, newStudent);
    setStudentName("");
  };
  const updateHandler = () => {};
  return (
    <>
      <div className="student-form-container">
        <form className="student-form">
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
