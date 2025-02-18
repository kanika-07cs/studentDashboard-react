import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useStore } from '../store';

const Navbar = () => {
  const user = useStore((state) => state.user);  // Accessing user state from Zustand
  const clearUser = useStore((state) => state.clearUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser(); // Clear user session
    navigate('/'); // Redirect to login page
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        {!user ? (
          <li>
            <NavLink to="/" style={styles.link} activeStyle={styles.activeLink}>
              Login
            </NavLink>
          </li>
        ) : (
          <>
            {user.role === 'student' && (
              <li>
                <NavLink
                  to="/student-dashboard"
                  style={styles.link}
                  activeStyle={styles.activeLink}
                >
                  Student Dashboard
                </NavLink>
              </li>
            )}
            {user.role === 'faculty' && (
              <li>
                <NavLink
                  to="/faculty-dashboard"
                  style={styles.link}
                  activeStyle={styles.activeLink}
                >
                  Faculty Dashboard
                </NavLink>
              </li>
            )}
            {user.role === 'admin' && (
              <li>
                <NavLink
                  to="/admin-dashboard"
                  style={styles.link}
                  activeStyle={styles.activeLink}
                >
                  Admin Dashboard
                </NavLink>
              </li>
            )}
            <li>
              <button onClick={handleLogout} style={styles.logoutButton}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

// Simple inline styles for the navbar
const styles = {
  navbar: {
    background: '#2c3e50',
    padding: '10px 20px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '10px 15px',
    borderRadius: '5px',
  },
  activeLink: {
    backgroundColor: '#34495e',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Navbar;
