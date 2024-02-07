import { ColorSchemeName as RNColorSchemeName, StyleSheet } from 'react-native';
import { themes } from '../../shared/config/themes';

export type Colors = {
  // primary
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  // secondary
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  // tertiary
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  // negative
  negative: string;
  onNegative: string;
  negativeContainer: string;
  onNegativeContainer: string;
  // positive
  positive: string;
  onPositive: string;
  positiveContainer: string;
  onPositiveContainer: string;
  // warning
  warning: string;
  onWarning: string;
  warningContainer: string;
  onWarningContainer: string;
  // info
  info: string;
  onInfo: string;
  infoContainer: string;
  onInfoContainer: string;
  // background
  background: string;
  onBackground: string;
  // surface
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  surfaceTint: string;
  surfaceBright: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
  //outline
  outline: string;
  outlineVariant: string;
};

export type ColorPalette = {
  primary: string;
  onPrimary: string;
};

export type Spacing = {
  base: number;
  double: number;
};

export type Elevation = {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
};

export type ColorModeTheme = {
  colors: Colors;
  spacing: Spacing;
  elevation: Elevation;
};

export type ColorModeName = NonNullable<RNColorSchemeName>;

export type Theme = {
  [key in ColorModeName]: ColorModeTheme;
};

export type ThemeName = keyof typeof themes;

export type CreateStylesFn<T> = (
  theme: ColorModeTheme,
) => T | StyleSheet.NamedStyles<T>;
