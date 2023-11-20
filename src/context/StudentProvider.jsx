import { useReducer } from "react";
import { createContext } from "react";
import { studentReducer } from "../reducer/student";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const initState = {
    studentName: "",
    editMode: false,
    studentList: [],
    editAbleStudent: null,
  };

  const [studentStates, dispatch] = useReducer(studentReducer, initState);

  const contextValue = {
    dispatch,
    studentStates,
  };
  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
