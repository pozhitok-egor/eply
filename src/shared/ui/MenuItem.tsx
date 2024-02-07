import {
  TextStyle,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from 'react-native';
import { Text } from './Text';
import { useTheme } from 'src/app/theme/ThemeContext';
import { ReactNode } from 'react';

export type MenuItemProps = {
  text: string;
  icon?: ReactNode;
  textStyle?: TextStyle;
} & Omit<TouchableHighlightProps, 'children'>;

export const MenuItem = ({ text, icon, ...props }: MenuItemProps) => {
  const {
    theme: { colors },
  } = useTheme();

  return (
    <TouchableHighlight
      underlayColor={colors.surfaceContainerHighest}
      style={{ borderRadius: 8 }}
      {...props}
      onPress={e => {
        props.onPress?.(e);
      }}>
      <View
        style={{
          flexDirection: 'row',
          padding: 12,
          alignItems: 'center',
        }}>
        {icon && <View style={{ marginRight: 8 }}></View>}
        <Text style={{ color: colors.onSurface, fontSize: 18 }}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};
