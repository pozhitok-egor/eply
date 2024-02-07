import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import { RootStackScreenProps } from 'src/app/navigation/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Palette } from 'lucide-react-native';
import { useTheme } from 'src/app/theme/ThemeContext';
import { Heading, MenuList } from '@shared/ui';

const Appearance = ({ navigation }: RootStackScreenProps<'Appearance'>) => {
  const insets = useSafeAreaInsets();
  const {
    theme: { colors },
  } = useTheme();
  return (
    <View
      style={{
        paddingTop: insets.top + 16,
        paddingBottom: insets.bottom,
        paddingHorizontal: 20,
        gap: 16,
      }}>
      <Heading>Appearance</Heading>
      <MenuList
        items={[
          {
            icon: <Palette size={18} color={colors.onSurface} />,
            text: 'Color Settings',
            onPress: () => navigation.navigate('ColorSettings'),
          },
        ]}
      />
    </View>
  );
};

export default Appearance;
