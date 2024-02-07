import { StyleSheet, Text as RNText, View, TextProps } from 'react-native';
import React, { useMemo } from 'react';
import { useStyles } from 'src/app/theme/useStyles';
import { ColorModeTheme } from 'src/app/theme/types';

export const Text = ({ style, children, ...props }: TextProps) => {
  const styles = useStyles(theme => ({
    text: {
      color: theme.colors.onSurface,
      fontFamily: 'Inter',
    },
  }));

  return (
    <RNText {...props} style={[styles.text, style]}>
      {children}
    </RNText>
  );
};
