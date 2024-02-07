import {
  CustomIconName,
  type CustomIconProps as DefaultCustomIconProps,
} from './CustomIcons';
import {
  LottieIconName,
  type LottieIconProps as DefaultLottieIconProps,
} from './LottieIcons';
import { type LucideProps as DefaultLucideProps } from 'lucide-react-native';
import {
  LucideIconName,
  LucideIconProps as DefaultLucideIconProps,
} from './LucideIcon';

export type CustomIconProps = {
  icon: CustomIconName;
} & DefaultCustomIconProps;

export type LottieIconProps = {
  icon: LottieIconName;
} & DefaultLottieIconProps;

export type LucideIconProps = {
  icon: LucideIconName;
} & DefaultLucideIconProps;

export type IconName = CustomIconName | LottieIconName | LucideIconName;
export type IconProps = CustomIconProps | LottieIconProps | LucideIconProps;
