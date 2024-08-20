import React, { createContext, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../redux/user/actions';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  // const [user, setUser] = useState(null);
  const user = useSelector(state => state.user);

  const login = async(username, password) => {

    try {
      const result = await dispatch(loginUser({ username, password }));

      if (result.error) {
        console.error("Error en el login:", result.error);
      }
    } catch (error) {
      console.error("Error en la petición de login:", error);
    }
      // if (username === "admin" && password === "admin") {
      //   setUser({ username });
      // }
  };

  const logout = () => {
    console.log('hacer logout', user)
    dispatch(logoutUser());
    // setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
