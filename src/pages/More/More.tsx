import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import { HomeTabScreenProps } from 'src/app/navigation/types';
import { Settings, User } from 'lucide-react-native';
import { useTheme } from 'src/app/theme/ThemeContext';
import { Heading, MenuList } from '@shared/ui';

const More = ({ navigation, route }: HomeTabScreenProps<'More'>) => {
  const {
    theme: { colors },
  } = useTheme();
  return (
    <View
      style={{
        paddingVertical: 16,
        paddingHorizontal: 20,
        gap: 16,
        flex: 1,
        backgroundColor: colors.surface,
        zIndex: 1000,
      }}>
      <TouchableHighlight
        onPress={() => {
          console.log('Touched');
        }}>
        <Heading>Hello there</Heading>
      </TouchableHighlight>
      <MenuList
        items={[
          {
            icon: <User size={18} color={colors.onSurface} />,
            text: 'Profile',
            onPress: () => navigation.navigate('Settings'),
            onPressIn: () => {
              console.log('onPressIn');
            },
            onPressOut: () => {
              console.log('onPressOut');
            },
          },
          {
            icon: <Settings size={18} color={colors.onSurface} />,
            text: 'Settings',
            onPress: () => navigation.navigate('Settings'),
          },
        ]}
      />
    </View>
  );
};

export default More;
