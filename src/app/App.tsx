import React, { useEffect } from 'react';

import { StatusBar } from 'react-native';
import { useTheme } from 'src/app/theme/ThemeContext';
import { Navigation } from './navigation';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  const { selectedColorMode } = useTheme();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
        translucent
        barStyle={
          selectedColorMode === 'dark' ? 'light-content' : 'dark-content'
        }
      />
      <Navigation />
    </>
  );
}
