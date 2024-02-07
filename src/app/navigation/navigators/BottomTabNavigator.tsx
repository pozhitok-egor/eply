import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../types';
import { useTheme } from '@theme/ThemeContext';
import { Text } from '@shared/ui';
import {
  LucideAreaChart,
  LucideArrowRightLeft,
  LucideHome,
  LucideLayoutGrid,
} from 'lucide-react-native';
import { Dashboard } from '@pages/Dashboard';
import { Transactions } from '@pages/Transactions';
import { Analytics } from '@pages/Analytics';
import { More } from '@pages/More';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  const {
    theme: { colors },
  } = useTheme();
  return (
    <BottomTab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.surface,
        flex: 1,
      }}
      screenOptions={{
        tabBarLabel: ({ children, focused }) => (
          <Text
            style={{
              fontSize: 10,
              color: focused ? colors.primary : colors.onSurface,
            }}>
            {children}
          </Text>
        ),
        headerStyle: {
          backgroundColor: colors.surfaceContainer,
        },
        tabBarStyle: {
          backgroundColor: colors.surfaceContainer,
          borderTopWidth: 0,
        },
        headerTitleStyle: {
          color: colors.onSurface,
        },
        tabBarLabelStyle: {
          color: colors.onSurface,
        },
        tabBarIconStyle: {
          color: colors.onSurface,
        },
      }}>
      <BottomTab.Screen
        name="Dashboard"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <LucideHome
              color={focused ? colors.primary : colors.onBackground}
              size={size}
            />
          ),
        }}
        component={Dashboard}
      />
      <BottomTab.Screen
        name="Transactions"
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <LucideArrowRightLeft
              color={focused ? colors.primary : colors.onBackground}
              size={size}
            />
          ),
        }}
        component={Transactions}
      />
      <BottomTab.Screen
        name="Analytics"
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <LucideAreaChart
              color={focused ? colors.primary : colors.onBackground}
              size={size}
            />
          ),
        }}
        component={Analytics}
      />
      <BottomTab.Screen
        name="More"
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <LucideLayoutGrid
              color={focused ? colors.primary : colors.onBackground}
              size={size}
            />
          ),
        }}
        component={More}
      />
    </BottomTab.Navigator>
  );
};
