import { rotationCoin } from './rotationCoin';
import { RGBObject } from './types';
import { useMemo } from 'react';
import { getColorValues } from '@shared/helpers';

export const lottieIcons = {
  rotationCoin: rotationCoin,
} as const;

export type LottieIconName = keyof typeof lottieIcons;

export const useLottieIcon = (
  icon: LottieIconName,
  color: RGBObject | string,
) =>
  useMemo(() => {
    let { r, g, b } = { r: 0, g: 0, b: 0 };

    if (typeof color === 'string') {
      const rgbColor = getColorValues(color);
      if (rgbColor) ({ r, g, b } = rgbColor);
    } else {
      ({ r, g, b } = color);
    }

    return lottieIcons[icon]({ color: { r, g, b } });
  }, [color, icon]);
