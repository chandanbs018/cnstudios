import { Bricolage_Grotesque, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollProgressBar from '@/components/layout/ScrollProgressBar';
import AnalyticsListener from '@/components/analytics/AnalyticsListener';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata = {
  metadataBase: new URL('https://ncstudios.in'),
  title: 'NC Studios | Creative Agency & Web Design Studio in Bengaluru',
  description: 'NC Studios is a creative agency in Bengaluru specializing in web design, brand identity, digital advertising, and social media marketing for ambitious businesses.',
  icons: {
    icon: '/nc-favicon.png',
    shortcut: '/nc-favicon.png',
    apple: '/nc-favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1WPTK0MS3L"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1WPTK0MS3L');
            `,
          }}
        />
        <AnalyticsListener />
        <ScrollProgressBar />
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
