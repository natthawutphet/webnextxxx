import "@/styles/globals.css";
import '@/styles/style.css'
import '@/styles/style1.css'
import '@/styles/style3.css'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16457513085"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16457513085');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
