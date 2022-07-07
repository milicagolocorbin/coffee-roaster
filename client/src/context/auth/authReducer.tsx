import { User, UserAction } from "./modelUser";

const initialState: User = {
  user: null,
  auth: false,
  loading: false,
};

const reducer = (state: typeof initialState, action: UserAction) => {
  if (action.type === "START_LOADING") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "STOP_LOADING") {
    return {
      ...state,
      loading: false,
    };
  }
  if (action.type === "LOGIN_USER") {
    return {
      ...state,
      user: {
        name: action.payload.user.name,
      },
      auth: true,
    };
  }
  if (action.type === "LOGOUT_USER") {
    return {
      ...state,
      user: null,
      auth: false,
    };
  }
  if (action.type === "REFRESH_USERS") {
    return {
      ...state,
      user: { name: action.payload.user?.name },
      auth: action.payload.user?.name ? true : false,
    };
  }
  return state;
};
export { reducer, initialState };
