export interface User {
  user: any;
  auth: boolean;
  loading: boolean;
}
export interface UserAction {
  type:
    | "START_LOADING"
    | "STOP_LOADING"
    | "LOGIN_USER"
    | "LOGOUT_USER"
    | "REFRESH_USERS";
  payload?: any;
}
