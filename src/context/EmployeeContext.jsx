import React, { createContext, useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listEmployees } from '../redux/employee/actions';

// Crear el contexto
const EmployeeContext = createContext();

// Proveedor de contexto
export const EmployeeProvider = ({ children }) => {

  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(listEmployees());
  }, [dispatch]);
  console.log('employees 1111', employees)

  return (
    <EmployeeContext.Provider value={{ data: employees }}>
      {children}
    </EmployeeContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useEmployees = () => {
  return useContext(EmployeeContext);
};
