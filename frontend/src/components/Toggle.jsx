import { FiMoon, FiSun } from 'react-icons/fi';

export const Toggle = ({ theme, toggleTheme }) => {
  return (
    <div className='toggle' onClick={toggleTheme}>
      { theme === 'light' ? <FiMoon size={36} /> : <FiSun size={36} /> }
    </div>
  )
}

export default Toggle