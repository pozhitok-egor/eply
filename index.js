/**
 * @format
 */

import React from 'react';
import { AppRegistry, useColorScheme } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import {
  Provider as PaperProvider,
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';

export default function Main() {
  const isDarkMode = useColorScheme() === 'dark';

  const paperTheme = isDarkMode
    ? { ...MD3DarkTheme, roundness: 2 }
    : { ...MD3LightTheme, roundness: 2 };

  return (
    <PaperProvider theme={paperTheme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
