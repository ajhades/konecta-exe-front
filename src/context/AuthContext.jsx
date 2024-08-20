import React, { createContext, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../redux/user/actions';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  // const user = useSelector((state) => state.user);

  const login = async(username, password) => {

    // try {
    //   dispatch(loginUser({username, password}));
    //   console.log('login');
    // } catch (error) {
    //   console.log('eeror en peticion');
    // }

    // Aquí iría la lógica para hacer la petición de login a tu API
    if (username === "admin" && password === "admin") {
      setUser({ username });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
