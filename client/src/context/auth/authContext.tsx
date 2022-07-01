import React, { useReducer, ReactNode, useEffect } from "react";
import { reducer, initialState } from "./authReducer";
import { User, UserAction } from "./modelUser";
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
    const userInfoLS: any = localStorage.getItem("userInfo");
    const userInfo = JSON.parse(userInfoLS);
    dispatch({ type: "REFRESH_USERS", payload: userInfo });
    dispatch({ type: "STOP_LOADING" });
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
