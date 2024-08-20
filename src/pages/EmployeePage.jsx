import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import Employees from '../components/Employees';
import { useNavigate } from 'react-router-dom';
import EmployeeList from '../components/EmployeeList';

const EmployeesPage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Evita renderizar el contenido si no hay un usuario
  }

  return (
    <div>
      <h2>Employees</h2>
      <EmployeeList />
    </div>
  );
};

export default EmployeesPage;
