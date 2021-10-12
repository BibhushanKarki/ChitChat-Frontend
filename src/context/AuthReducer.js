const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        user: null,
        isFetching: true,
        erorr: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        erorr: false,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        erorr: action.payload,
      };

    default:
      return state;
  }
};
export default AuthReducer;
