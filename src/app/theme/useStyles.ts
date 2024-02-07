import { DependencyList, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { ColorModeTheme, Colors } from './types';
import { useTheme } from './ThemeContext';

export const useStyles = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(
  create: (theme: ColorModeTheme) => T | StyleSheet.NamedStyles<T>,
  deps: DependencyList = [],
): T => {
  const { theme } = useTheme();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(
    () => StyleSheet.create(create(theme) as T),
    [
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...deps,
      theme,
    ],
  );
};
