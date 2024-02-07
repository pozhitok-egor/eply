import {
  Image,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackScreenProps } from 'src/app/navigation/types';
import { useTheme } from 'src/app/theme/ThemeContext';
import { Text } from '@shared/ui';
import { Icon } from '@shared/ui/icons';

import Animated from 'react-native-reanimated';

const Onboarding = ({ navigation }: RootStackScreenProps<'Onboarding'>) => {
  const {
    theme: { colors },
  } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        gap: 24,
        backgroundColor: colors.surface,
        padding: 16,
        paddingTop: 16 + insets.top,
        paddingBottom: 16 + insets.bottom,
        justifyContent: 'space-between',
      }}>
      <Animated.View
        sharedTransitionTag="logo"
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        }}>
        <Icon icon="coin" size={36} color={colors.onSurface} rotation={-45} />
        <Text
          style={{
            fontSize: 36,
            fontFamily: 'Inter',
          }}>
          EPLY
        </Text>
      </Animated.View>
      {/* <Icon
        icon="rotationCoin"
        autoPlay
        loop
        color={colors.onSurface}
        speed={0.5}
        style={{
          aspectRatio: 1 / 1,
          width: '60%',
          alignSelf: 'center',
        }}
      /> */}
      <Image
        source={require('@assets/images/coin.webp')}
        style={{ width: 300, height: 300, alignSelf: 'center' }}
      />
      <Text
        style={{
          fontSize: 27,
          fontWeight: '500',
          fontFamily: 'Inter',
          color: colors.onSurface,
        }}>
        Track your expenses wisely with EPLY
      </Text>

      <View style={{ display: 'flex', gap: 24 }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <Text>By continuing to use this app, you agree to our</Text>
          <TouchableOpacity onPress={() => console.log('Terms of Conditions')}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: colors.primary,
              }}>
              Terms of Conditions
            </Text>
          </TouchableOpacity>
          <Text> and </Text>
          <TouchableOpacity onPress={() => console.log('Privacy Policy')}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: colors.primary,
              }}>
              Privacy Policy.
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableHighlight
          underlayColor={colors.primary}
          style={{
            backgroundColor: colors.primary,
            minHeight: 44,
            paddingHorizontal: 16,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}
          onPress={() => navigation.replace('Home', { screen: 'Dashboard' })}>
          <Text
            style={{
              fontSize: 16,
              color: colors.onPrimary,
            }}>
            Continue
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Onboarding;
