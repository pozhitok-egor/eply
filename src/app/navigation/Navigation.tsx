import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { RootStackNavigator } from './navigators';
import { useTheme } from '@theme/ThemeContext';

export const Navigation = () => {
  const {
    theme: { colors },
  } = useTheme();
  return (
    <NavigationContainer>
      <View style={{ backgroundColor: colors.surface, flex: 1 }}>
        <RootStackNavigator />
      </View>
    </NavigationContainer>
  );
};
