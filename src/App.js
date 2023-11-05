import "./App.css";
import React from "react";
import { StudentForm } from "./components/StudentForm";
import StudentSection from "./components/StudentSection";

function App() {
  return (
    <>
      <div className="student-form-container">
        <StudentForm />
        <StudentSection />
      </div>
    </>
  );
}
export default App;
