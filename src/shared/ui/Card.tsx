import { CreateStylesFn } from 'src/app/theme/types';
import { useStyles } from 'src/app/theme/useStyles';
import { useMemo } from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

export const Card = ({ children, style, ...props }: ViewProps) => {
  const styles = useStyles(createStyles);
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

const createStyles: CreateStylesFn<{ card: ViewStyle }> = theme => ({
  card: {
    backgroundColor: theme.colors.surfaceContainer,
    padding: 16,
    borderRadius: 16,
  },
});
