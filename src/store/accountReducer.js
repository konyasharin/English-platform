let defaultState = {
  login: "123",
  form: ""
}

const accountReducer = (state = defaultState, action) => {
  switch (action.type){
    case "EDIT_LOGIN":
      return {...defaultState, login: action.login}
    case "CHOOSE_ENTRY":
      return {...defaultState, form: "choose"}
    case "REGISTRATION":
      return {...defaultState, form: "registration"}
    case "ENTRY":
      return {...defaultState, form: "entry"}
    default:
      return defaultState
  }
}

export default accountReducer