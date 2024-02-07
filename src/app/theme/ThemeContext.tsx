import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { ColorModeName, ColorModeTheme, ThemeName } from './types';
import { themes } from '../../shared/config/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_STORAGE_KEY = 'theme';
const COLOR_MODE_STORAGE_KEY = 'mode';

const themeStorage = {
  setTheme: (theme: ThemeName) =>
    AsyncStorage.setItem(THEME_STORAGE_KEY, theme),
  getTheme: () =>
    AsyncStorage.getItem(THEME_STORAGE_KEY).then(
      theme => (theme as ThemeName) || 'brand',
    ),
  setColorMode: (colorMode: ColorModeName) =>
    AsyncStorage.setItem(COLOR_MODE_STORAGE_KEY, colorMode),
  getColorMode: () =>
    AsyncStorage.getItem(COLOR_MODE_STORAGE_KEY).then(
      mode => (mode as ColorModeName) || null,
    ),
  removeColorMode: () => AsyncStorage.removeItem(COLOR_MODE_STORAGE_KEY),
};

interface ThemeContextType {
  theme: ColorModeTheme;
  setTheme: (theme: ThemeName) => void;
  setColorMode: (colorMode: ColorModeName | 'system') => void;
  selectedTheme: ThemeName;
  selectedColorMode: ColorModeName;
  isSystem: boolean;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const defaultColorMode = useColorScheme() || 'light';
  const [selectedColorMode, setSelectedColorMode] =
    useState<ColorModeName | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>('brand');

  useEffect(() => {
    themeStorage.getTheme().then(theme => setSelectedTheme(theme));
    themeStorage.getColorMode().then(mode => setSelectedColorMode(mode));
  }, []);

  const setTheme = (theme: ThemeName) => {
    themeStorage.setTheme(theme);
    setSelectedTheme(theme);
  };

  const setColorMode = (colorMode: ColorModeName | 'system') => {
    if (colorMode === 'system') {
      themeStorage.removeColorMode();
      setSelectedColorMode(null);
      return;
    }
    themeStorage.setColorMode(colorMode);
    setSelectedColorMode(colorMode);
  };

  const theme = useMemo(() => {
    return themes[selectedTheme][selectedColorMode || defaultColorMode];
  }, [selectedTheme, selectedColorMode, defaultColorMode]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        setColorMode,
        selectedTheme,
        selectedColorMode: selectedColorMode || defaultColorMode,
        isSystem: selectedColorMode === null,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
