import React from 'react';
import { Toggle } from './Toggle';
import { Language } from './Language';
import { useDarkMode } from '../styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';

function Footer() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <footer className="footer">
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Language />
      </footer>
    </ThemeProvider>
  );
}

export default Footer;
