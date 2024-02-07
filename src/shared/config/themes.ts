import { DEFAULT_DARK, DEFAULT_LIGHT } from './defaultThemes';
import { ColorModeTheme, Theme } from '../../app/theme/types';

const brandDarkTheme: ColorModeTheme = {
  ...DEFAULT_DARK,
};

const brandLightTheme: ColorModeTheme = {
  ...DEFAULT_LIGHT,
};

const brand: Theme = {
  dark: brandDarkTheme,
  light: brandLightTheme,
};

export const themes = {
  brand,
};
