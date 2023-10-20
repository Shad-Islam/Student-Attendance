import { useState } from "react";
import "./App.css";

function App() {
  const [edit, setEdit] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [studentName, setStudentName] = useState("");

  const submitHandeler = (studentName) => {
    setStudentName(studentName);
  };

  return (
    <>
      <div className="student-form-container">
        <form className="student-form">
          <input
            type="text"
            value={studentName}
            onChange={(e) => {
              submitHandeler(e.target.value);
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
