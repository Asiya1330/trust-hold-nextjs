// pages/_app.tsx
import React from 'react';
import RootLayout from '../app/layout'; // Import the layout component

// Import AppProps type from Next.js
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps<Record<string, unknown>>) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
