const initialState = {
  user: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_PENDING":
      return {
        ...state,
      };
    case "GET_USER_REJECTED":
      return {
        ...state,
      };
    case "GET_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        user: action.payload.data.result,
      };
    case "DELETE_USER_PENDING":
      return {
        ...state,
      };
    case "DELETE_USER_REJECTED":
      return {
        ...state,
      };
    case "DELETE_USER_FULFILLED":
      return {
        ...state,
        user: action.payload.data.result,
      };
    case "POST_USER_PENDING":
      return {
        ...state,
      };

    case "POST_USER_REJECTED":
      return {
        ...state,
      };

    case "POST_USER_FULFILLED":
      return {
        ...state,
        user: action.payload.data.result,
      };
    case "PATCH_USER_PENDING":
      return {
        ...state,
      };

    case "PATCH_USER_REJECTED":
      return {
        ...state,
      };

    case "PATCH_USER_FULFILLED":
      return {
        ...state,
        user: action.payload.data.result,
      };
    default:
      return state;
  }
};

export default user;
