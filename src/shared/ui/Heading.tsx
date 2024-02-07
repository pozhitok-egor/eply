import { StyleSheet, TextProps } from 'react-native';
import { Text } from './Text';
import { useMemo } from 'react';

type HeadingProps = {} & TextProps;

export const Heading = ({ style, ...props }: HeadingProps) => {
  const headingStyle = useMemo(
    () => StyleSheet.compose(style, styles.heading),
    [],
  );
  return <Text {...props} style={headingStyle}></Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
  },
});
