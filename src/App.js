import { useState } from "react";
import "./App.css";

function App() {
  const [edit, setEdit] = useState(false);
  const [studentName, setStudentName] = useState();

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
      </div>
    </>
  );
}

export default App;
