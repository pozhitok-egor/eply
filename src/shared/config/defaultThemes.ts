import { ColorModeTheme, Spacing, Theme } from '../../app/theme/types';

export const DEFAULT_SPACING: Spacing = {
  base: 8,
  double: 16,
};

export const DEFAULT_LIGHT: ColorModeTheme = {
  colors: {
    primary: '#66558F',
    onPrimary: '#FFFFFF',

    primaryContainer: '#E9DDFF',
    onPrimaryContainer: '#210F47',

    secondary: '#625B70',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#E8DEF8',
    onSecondaryContainer: '#1E192B',

    tertiary: '#7E525F',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#FFD9E2',
    onTertiaryContainer: '#31101D',

    negative: '#BA1A1A',
    onNegative: '#FFFFFF',
    negativeContainer: '#FFDAD6',
    onNegativeContainer: '#410002',

    positive: '',
    onPositive: '',
    positiveContainer: '',
    onPositiveContainer: '',

    warning: '',
    onWarning: '',
    warningContainer: '',
    onWarningContainer: '',

    info: '',
    onInfo: '',
    infoContainer: '',
    onInfoContainer: '',

    background: '#FEF7FF',
    onBackground: '#1D1B20',

    surface: '#FEF7FF',
    onSurface: '#1D1B20',
    surfaceVariant: '#E7E0EB',
    onSurfaceVariant: '#49454E',
    surfaceTint: '#66558F',
    surfaceBright: '#FFF7FE',
    surfaceContainerLowest: '#FFFFFF',
    surfaceContainerLow: '#F9F1F9',
    surfaceContainer: '#F4EBF3',
    surfaceContainerHigh: '#EEE6EE',
    surfaceContainerHighest: '#E8E0E8',

    outline: '#7A757F',
    outlineVariant: '#CAC4CF',
  },
  spacing: DEFAULT_SPACING,
  elevation: {
    '1': '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
    '2': '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
    '3': '0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
    '4': '0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
    '5': '0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
  },
};

export const DEFAULT_DARK: ColorModeTheme = {
  colors: {
    primary: '#DBB9F9',
    onPrimary: '#3F2458',
    primaryContainer: '#563A70',
    onPrimaryContainer: '#F0DBFF',

    secondary: '#D1C1D9',
    onSecondary: '#372C3F',
    secondaryContainer: '#4E4356',
    onSecondaryContainer: '#EDDDF6',

    tertiary: '#F3B7BD',
    onTertiary: '#4B252A',
    tertiaryContainer: '#653A40',
    onTertiaryContainer: '#FFD9DC',

    negative: '#FFB4AB',
    onNegative: '#690005',
    negativeContainer: '#93000A',
    onNegativeContainer: '#FFDAD6',

    background: '#151217',
    onBackground: '#E8E0E8',

    positive: '',
    onPositive: '',
    positiveContainer: '',
    onPositiveContainer: '',

    warning: '',
    onWarning: '',
    warningContainer: '',
    onWarningContainer: '',

    info: '',
    onInfo: '',
    infoContainer: '',
    onInfoContainer: '',

    surface: '#151217',
    onSurface: '#E8E0E8',
    surfaceTint: '#DBB9F9',
    surfaceVariant: '#4A454E',
    onSurfaceVariant: '#CDC4CE',
    surfaceBright: '#3C383E',
    surfaceContainerLowest: '#100D12',
    surfaceContainerLow: '#1E1A20',
    surfaceContainer: '#221E24',
    surfaceContainerHigh: '#2C292E',
    surfaceContainerHighest: '#373339',

    outline: '#968E98',
    outlineVariant: '#4A454E',
  },
  spacing: DEFAULT_SPACING,
  elevation: {
    '1': '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
    '2': '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
    '3': '0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
    '4': '0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
    '5': '0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
  },
};

export const DefaultTheme: Theme = {
  dark: DEFAULT_DARK,
  light: DEFAULT_LIGHT,
};
