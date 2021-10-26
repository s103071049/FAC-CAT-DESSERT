const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUT_VALUE":
      return {
        ...state,
        [action.title]:action.payload
      }
    default:
      return state
  }
}

export default formReducer