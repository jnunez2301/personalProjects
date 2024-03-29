import React, { createContext, useContext, useEffect } from "react";
import { useColorScheme } from "react-native";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const lightModeBackgroundColor = '#f2f2f2';
  const darkModeBackgroundColor = '#111827';
  const backgroundDarkMode = '#030712';

  const themeColor = colorScheme === 'dark' ? darkModeBackgroundColor : lightModeBackgroundColor;
  
  const themeTextColor = colorScheme !== 'dark' ? darkModeBackgroundColor : 'white';

  const themeBackgroundColor = colorScheme === 'dark' ? backgroundDarkMode : 'white';

  return (
    <ThemeContext.Provider value={{ themeColor, themeTextColor, themeBackgroundColor, colorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
