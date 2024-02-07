import * as icons from 'lucide-react-native';

export type LucideIconName = keyof typeof icons;

export interface LucideIconProps extends Omit<icons.LucideProps, 'ref'> {
  name: LucideIconName;
}

export const LucideIcon = ({ name, ...props }: LucideIconProps) => {
  const Icon = icons[name] as icons.LucideIcon;

  return <Icon {...props} />;
};
