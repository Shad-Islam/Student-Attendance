import { createContext } from "react";

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  return <StudentContext.Provider>{children}</StudentContext.Provider>;
};

export default StudentProvider;
