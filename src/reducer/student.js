export const studentReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STUDENT_NAME": {
      return {
        ...state,
        studentName: action.payload,
      };
    }

    case "CREATE_STUDENT": {
      const newStudent = {
        id: Date.now() + "",
        name: state.studentName,
        isPresent: undefined,
      };
      return {
        ...state,
        studentList: [...state.studentList, newStudent],
        studentName: "",
      };
    }
    case "EDIT_STUDENT": {
      return {
        ...state,
        editMode: true,
        editAbleStudent: action.payload,
        studentName: action.payload.name,
      };
    }
    case "UPDATE-STUDENT": {
      return {
        ...state,
        studentList: state.studentList.map((student) => {
          if (student.id === action.payload.studentID) {
            return {
              ...student,
              [action.payload.propertyName]: action.payload.propertyValue,
            };
          }
          return student;
        }),
        editMode:
          action.payload.propertyName === "name" ? false : state.editMode,
        editAbleStudent:
          action.payload.propertyName === "name" ? null : state.editAbleStudent,
        studentName:
          action.payload.propertName === "name" ? "" : state.studentName,
      };
    }
    case "REMOVE_SSTUDENT": {
      return {
        ...state,
        studentList: state.studentList.filter(
          (student) => student.id !== action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};
