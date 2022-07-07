import React, { useReducer, ReactNode, useEffect } from "react";
import { reducer, initialState } from "./authReducer";
import { User, UserAction } from "./modelUser";
import AuthAPI from "../../api/authApi";
// toastify
import { toast } from "react-toastify";
/////////////////////////// END OF IMPORTS //////////////////////////

// create context
const AuthContext = React.createContext<{
  state: User;
  dispatch: React.Dispatch<UserAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

type Props = {
  children: ReactNode;
};

// create provider
const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const getUser = async () => {
      try {
        dispatch({ type: "START_LOADING" });
        const response = await AuthAPI.getFromServer(`/user/get-user`);
        dispatch({ type: "REFRESH_USERS", payload: response.data });
        dispatch({ type: "STOP_LOADING" });
      } catch (error: any) {
        dispatch({ type: "STOP_LOADING" });
        toast.error(error?.response?.data?.message);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ state, dispatch }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
export { AuthContext, AuthProvider };
