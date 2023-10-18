import { useState } from "react";
import "./App.css";

function App() {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className="student-form-container">
        <form className="student-form">
          <input type="text" />
          <button type="submit">
            {edit ? "Update Student" : "Add Student"}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
