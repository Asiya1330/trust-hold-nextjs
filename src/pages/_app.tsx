// pages/_app.tsx
import React from 'react';
import RootLayout from '../app/layout'; // Import the layout component

// Import AppProps type from Next.js
import type { AppProps } from 'next/app';
import { Libre_Baskerville, Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'], // Add other font weights if needed
})
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'], // Add other font weights if needed
});
function MyApp({ Component, pageProps }: AppProps<Record<string, unknown>>) {
  return (
    <RootLayout>
      <div className={`${outfit.className} ${libreBaskerville.className}`}>
        <Component {...pageProps} />
      </div>
    </RootLayout>
  );
}

export default MyApp;
