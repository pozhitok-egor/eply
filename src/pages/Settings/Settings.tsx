import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import { RootStackScreenProps } from 'src/app/navigation/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'src/app/theme/ThemeContext';
import { Heading, MenuList } from '@shared/ui';
import { ArrowLeft, Brush } from 'lucide-react-native';

const Settings = ({ navigation }: RootStackScreenProps<'Settings'>) => {
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
        flex: 1,
      }}>
      <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        <TouchableHighlight
          style={{ padding: 2 }}
          underlayColor={colors.surface}
          onPress={() => navigation.goBack()}>
          <ArrowLeft size={20} color={colors.onSurface} />
        </TouchableHighlight>
        <Heading>Settings</Heading>
      </View>
      <Heading>Settings</Heading>
      <MenuList
        items={[
          {
            icon: <Brush size={18} color={colors.onSurface} />,
            text: 'Appearance',
            onPress: () => navigation.navigate('Appearance'),
          },
        ]}
      />
    </View>
  );
};

export default Settings;
