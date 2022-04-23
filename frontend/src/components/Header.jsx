import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logout, reset } from '../features/auth/authSlice';
import { GlobalStyles, lightTheme, darkTheme } from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import logo from '../assets/logo.png';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  const theme = localStorage.getItem('theme');
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <GlobalStyles />
        <ul>
          {user ? (
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt />
                {t('logout')}
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <FaSignInAlt />
                  {t('login')}
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <FaUser />
                  {t('register')}
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>
    </ThemeProvider>
  );
}

export default Header;
