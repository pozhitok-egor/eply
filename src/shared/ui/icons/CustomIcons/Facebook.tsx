import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { CustomIconProps } from './types';

export const Facebook = ({
  size = '1em',
  color,
  ...props
}: CustomIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill={color || 'currentColor'}
        d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
      />
    </Svg>
  );
};
