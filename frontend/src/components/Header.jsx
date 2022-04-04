import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Toggle } from './Toggle';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useDarkMode } from '../styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <header className='header'>
        <div className='logo'>
          <Link to='/'>GoalSetter</Link>
        </div>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
        <ul>
          {user ? (
            <li>
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt />
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to='/login'>
                  <FaSignInAlt />
                  Login
                </Link>
              </li>
              <li>
                <Link to='/register'>
                  <FaUser />
                  Register
                </Link>
              </li>
            </>)}
          
        </ul>
      </header>
    </ThemeProvider>      
  )
}

export default Header