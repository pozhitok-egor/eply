import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Heading } from './Heading';
import { MoveLeftIcon } from 'lucide-react-native';
import { useTheme } from 'src/app/theme/ThemeContext';

export const StackHeader = (props: NativeStackHeaderProps) => {
  const insets = useSafeAreaInsets();
  const {
    theme: { colors },
  } = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 8,
        paddingTop: 16 + insets.top,
        paddingLeft: 16,
        alignItems: 'center',
      }}>
      {props.back && props.options.headerBackButtonMenuEnabled && (
        <MoveLeftIcon size={18} color={colors.onSurface} />
      )}
      <Heading>{props.route.name}</Heading>
    </View>
  );
};
