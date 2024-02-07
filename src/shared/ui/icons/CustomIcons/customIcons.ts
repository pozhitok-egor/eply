import { Coin } from './Coin';
import { Facebook } from './Facebook';
import { Google } from './Google';

export type CustomIconName = keyof typeof customIcons;

export const customIcons = {
  coin: Coin,
  facebook: Facebook,
  google: Google,
} as const;
