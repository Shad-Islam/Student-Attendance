import React from "react";
import { createContext } from "react";

const StudentContext = createContext();

function StudentProvider({ child }) {
  return <StudentContext.Provider>{child}</StudentContext.Provider>;
}

export default StudentProvider;
