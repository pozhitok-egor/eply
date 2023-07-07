// this provides some helpful reset styles to ensure a more consistent look
// only import this from your web app, not native
import '@tamagui/core/reset.css';

import React, { Suspense } from 'react';
import { Button, TamaguiProvider } from 'tamagui';

import config from './tamagui.config';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      {/* if you want nice React 18 concurrent hydration, you'll want Suspense near the root */}
      <Suspense>
        <AppContents />
      </Suspense>
    </TamaguiProvider>
  );
}

const AppContents = () => {
  return <Button>Hello</Button>;
};
