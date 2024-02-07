import { useTheme } from 'src/app/theme/ThemeContext';
import { MenuItem, MenuItemProps } from './MenuItem';
import { View } from 'react-native';

type MenuListProps = {
  items: MenuItemProps[];
};

export const MenuList = ({ items }: MenuListProps) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        padding: 8,
        backgroundColor: theme.colors.surfaceContainer,
        borderRadius: 16,
        gap: 8,
      }}>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </View>
  );
};
