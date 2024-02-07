import { customIcons } from './CustomIcons';
import { LottieIcon, lottieIcons } from './LottieIcons';
import { LucideIcon } from './LucideIcon';
import { IconProps, CustomIconProps, LottieIconProps } from './types';

export function isCustomIconProps(props: IconProps): props is CustomIconProps {
  return customIcons[(props as CustomIconProps).icon] !== undefined;
}

export function isLottieIconProps(props: IconProps): props is LottieIconProps {
  return lottieIcons[(props as LottieIconProps).icon] !== undefined;
}

export const Icon = (props: IconProps) => {
  if (isLottieIconProps(props)) {
    return <LottieIcon {...props} />;
  } else if (isCustomIconProps(props)) {
    const Icon = customIcons[props.icon];
    return <Icon {...props} />;
  } else {
    return <LucideIcon {...props} />;
  }
};
