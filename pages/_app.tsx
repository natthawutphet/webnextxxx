import '@/styles/globals.css';
import '@/styles/style.css';
import '@/styles/style1.css';
import '@/styles/style3.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  
      <Component {...pageProps} />
     <GoogleTagManager gtmId="GTM-KGJWGD85" />
      <GoogleAnalytics gaId="G-Z1NFV5NRKQ" />
    </>
  );
}
