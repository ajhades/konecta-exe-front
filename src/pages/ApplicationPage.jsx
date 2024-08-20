import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ApplicationList from '../components/ApplicationList';

const ApplicationsPage = () => {
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
      <h2>Applications</h2>
      <ApplicationList />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default ApplicationsPage;
