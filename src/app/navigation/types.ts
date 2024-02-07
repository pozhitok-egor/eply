import type {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteConfig,
  StackNavigationState,
} from '@react-navigation/native';
import type {
  StackNavigationEventMap,
  StackNavigationOptions,
  StackScreenProps,
} from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Home: NavigatorScreenParams<BottomTabParamList>;
  NotFound: undefined;
  Accounts: undefined;
  Settings: undefined;
  Appearance: undefined;
  ColorSettings: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type BottomTabParamList = {
  Dashboard: undefined;
  Transactions: undefined;
  Analytics: undefined;
  More: undefined;
};

export type HomeTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
