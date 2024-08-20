import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
// import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
          <Button component={RouterLink} to="/employees">
            Employees
          </Button>
            {/* <Link  color="black" to="/employees">Employees</Link> */}
          </li>
          <li>
            {/* <Link to="/applications">Applications</Link> */}
            <Button component={RouterLink} to="/applications">
            applications
          </Button>
          </li>
          <li>
            {user ? (
              <button onClick={logout}>Logout</button>
            ) : (
              // <Link to="/login">Login</Link>
              <Button component={RouterLink} to="/login">
                login
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
