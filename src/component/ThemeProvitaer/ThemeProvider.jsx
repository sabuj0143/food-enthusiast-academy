import { createContext, useState } from "react";


export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
     // Define theme variables
  const themeVariables = {
    light: {
      backgroundColor: '#ffffff',
      textColor: '#000000',
    },
    dark: {
      backgroundColor: '#000000',
      textColor: '#ffffff',
    },
  };

  // Apply theme styles
  const themeStyles = {
    backgroundColor: themeVariables[theme].backgroundColor,
    color: themeVariables[theme].textColor,
  };

    const authInfo = {
        theme,
        toggleTheme,
    }

    return (
        <ThemeContext.Provider value={authInfo}>
            <div style={themeStyles}>{children}</div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;