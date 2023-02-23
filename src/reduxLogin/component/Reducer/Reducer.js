const initial_state = {
  data: { Login: true, Register: false, WelcomePage: false },
  info: { name: "" },
};

export const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "getPage":
      return {
        ...state,
      };
    case "getData":
      return {
        ...state,
      };
    case "LoginPage":
      return {
        ...state,

        data: action.payload[0],
        info: action.payload[1],
      };
    case "RegisterPage":
      return {
        ...state,
        data: action.payload,
      };
    case "Welcome":
      return {
        ...state,
        data: action.payload[0],
        info: action.payload[1],
      };
    default:
      return state;
  }
};
