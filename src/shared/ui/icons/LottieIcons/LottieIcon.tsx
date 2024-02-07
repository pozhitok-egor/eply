import LottieView, { LottieViewProps } from 'lottie-react-native';
import { LottieIconName, useLottieIcon } from './lottieIcons';
import { RGBObject } from './types';

export type LottieIconProps = {
  icon: LottieIconName;
  color?: RGBObject | string;
} & Omit<LottieViewProps, 'source'>;

export const LottieIcon = ({ icon, color, ...props }: LottieIconProps) => {
  const lottieIcon = useLottieIcon(icon, color || { r: 0, g: 0, b: 0 });
  return <LottieView {...props} source={lottieIcon} />;
};
