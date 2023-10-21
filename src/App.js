import { useState } from "react";
import "./App.css";

function App() {
  const [edit, setEdit] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [studentName, setStudentName] = useState("");

  const submitHandler = (studentName) => {
    setStudentName(studentName);
  };
  const editHandler = (student) => {};
  const removeHandler = (studentId) => {};

  return (
    <>
      <div className="student-form-container">
        <form className="student-form">
          <input
            type="text"
            value={studentName}
            onChange={(e) => {
              submitHandler(e.target.value);
            }}
          />
          {console.log(studentName)}

          <button type="submit">
            {edit ? "Update Student" : "Add Student"}
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
