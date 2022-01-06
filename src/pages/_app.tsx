import React, { ReactNode } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { AppProvider } from '../containers/AppProvider';
import { AppLayout } from '../containers/AppLayout';
import { createEmotionCache } from '../scripts/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

interface SoulExplorerAppProps extends AppProps {
  emotionCache: EmotionCache;
}

const SoulExplorerApp: ReactNode = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: SoulExplorerAppProps) => (
  <CacheProvider value={emotionCache}>
    <AppProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppProvider>
  </CacheProvider>
);

export default SoulExplorerApp;
