import { View, Text, useColorScheme, TouchableOpacity } from 'react-native';
import React from 'react';
import { themes } from '@shared/config/themes';
import { RootStackScreenProps } from 'src/app/navigation/types';
import { ThemeName } from 'src/app/theme/types';
import { useTheme } from 'src/app/theme/ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Card } from '@shared/ui/Card';
import { Heading, MenuList } from '@shared/ui';
import { Moon, Phone, PhoneIcon, Smartphone, Sun } from 'lucide-react-native';

const ColorSettings = (props: RootStackScreenProps<'ColorSettings'>) => {
  const {
    selectedTheme,
    selectedColorMode,
    setColorMode,
    setTheme,
    theme: { colors },
  } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.surface,
        paddingTop: insets.top + 16,
        paddingBottom: insets.bottom,
        paddingHorizontal: 20,
        display: 'flex',
        gap: 16,
      }}>
      <Heading>Theme</Heading>
      <Card>
        {(Object.keys(themes) as ThemeName[]).map(key => (
          <TouchableOpacity onPress={() => setTheme(key)}>
            <View
              style={{
                width: 40,
                height: 40,
                borderWidth: 2,
                borderColor:
                  key === selectedTheme ? colors.primary : 'transparent',
                borderRadius: 12,
                padding: 1,
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor:
                    themes[key][selectedColorMode].colors.primary,
                  borderWidth: 1,
                  borderColor: colors.surface,
                  borderRadius: 10,
                }}
              />
            </View>
          </TouchableOpacity>
        ))}
      </Card>
      <Heading>Color mode</Heading>

      <MenuList
        items={[
          {
            icon: <Smartphone size={18} color={colors.onSurface} />,
            text: 'System',
            onPress: () => setColorMode('system'),
          },

          {
            icon: <Sun size={18} color={colors.onSurface} />,
            text: 'Light',
            onPress: () => setColorMode('light'),
          },

          {
            icon: <Moon size={18} color={colors.onSurface} />,
            text: 'Dark',
            onPress: () => setColorMode('dark'),
          },
        ]}
      />
    </View>
  );
};

export default ColorSettings;
