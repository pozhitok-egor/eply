import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@theme/ThemeContext';
import { RootStackParamList } from '../types';
import { Onboarding } from '@pages/Onboarding';
import { BottomTabNavigator } from './BottomTabNavigator';
import { StackHeader } from '@shared/ui';
import { Appearance } from '@pages/Appearance';
import { ColorSettings } from '@pages/ColorSettings';
import { Settings } from '@pages';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  const {
    theme: { colors },
  } = useTheme();
  return (
    <RootStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        contentStyle: { backgroundColor: colors.surface },
      }}>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            navigationBarColor: colors.surface,
          }}
        />
        <RootStack.Screen
          options={{ navigationBarColor: colors.surfaceContainer }}
          name="Home"
          component={BottomTabNavigator}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ header: StackHeader }}>
        <RootStack.Screen name="Settings" component={Settings} />
        <RootStack.Screen name="Appearance" component={Appearance} />
        <RootStack.Screen name="ColorSettings" component={ColorSettings} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
