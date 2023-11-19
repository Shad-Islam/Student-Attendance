export const studentReducer = (state, action) => {
  switch (action.type) {
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
    }
    case "UPDATE-STUDENT": {
    }
    case "REMOVE_SSTUDENT": {
    }
    default: {
      return state;
    }
  }
};
