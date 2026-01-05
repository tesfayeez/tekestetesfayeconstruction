import type { Metadata } from "next";
import { Syne, DM_Sans, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoSansEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-noto-ethiopic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tekestetesfayecon.com'),
  title: {
    default: "Tekeste Tesfaye Building Contractor | Grade I Construction Company in Ethiopia",
    template: "%s | Tekeste Tesfaye Building Contractor"
  },
  description: "Grade I general contractor in Ethiopia since 1995. Specializing in water systems, hospitals, schools, roads, and bridges across Addis Ababa, Dire Dawa, and 7 regions. 29+ years of excellence.",
  keywords: [
    "Grade 1 contractors Addis Ababa",
    "construction company Ethiopia",
    "building contractor Addis Ababa",
    "water supply system construction Ethiopia",
    "hospital construction Ethiopia",
    "TVET facility construction",
    "road construction contractors Ethiopia",
    "BIM construction services Ethiopia",
    "general contractor Dire Dawa",
    "Tekeste Tesfaye"
  ],
  authors: [{ name: "Tekeste Tesfaye Building Contractor" }],
  creator: "Tekeste Tesfaye Building Contractor",
  publisher: "Tekeste Tesfaye Building Contractor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_ET',
    url: 'https://tekestetesfayecon.com',
    siteName: 'Tekeste Tesfaye Building Contractor',
    title: 'Tekeste Tesfaye Building Contractor | Grade I Construction Company in Ethiopia',
    description: 'Grade I general contractor in Ethiopia since 1995. Specializing in water systems, hospitals, schools, roads, and bridges.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tekeste Tesfaye Building Contractor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tekeste Tesfaye Building Contractor | Grade I Construction Company',
    description: 'Grade I general contractor in Ethiopia since 1995. 29+ years of excellence in construction.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': 'https://tekestetesfayecon.com/#contractor',
    name: 'Tekeste Tesfaye Building Contractor',
    alternateName: 'TTBC',
    description: 'Grade I general contractor in Ethiopia specializing in water systems, hospitals, schools, roads, and bridges. 29+ years of experience.',
    url: 'https://tekestetesfayecon.com',
    logo: 'https://tekestetesfayecon.com/logo.svg',
    image: 'https://tekestetesfayecon.com/og-image.jpg',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Sami building (Bole sub city, Woreda 13, Kebele 10, #502 B)',
        addressLocality: 'Addis Ababa',
        addressRegion: 'Addis Ababa',
        postalCode: '12274',
        addressCountry: 'ET'
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Dire Dawa',
        addressRegion: 'Dire Dawa',
        addressCountry: 'ET'
      }
    ],
    telephone: ['+251 116 29 98 24', '+251 116 29 98 25'],
    email: 'tekestetesfaye2@gmail.com',
    areaServed: [
      { '@type': 'State', name: 'Addis Ababa' },
      { '@type': 'State', name: 'Oromia' },
      { '@type': 'State', name: 'Dire Dawa' },
      { '@type': 'State', name: 'Somali' },
      { '@type': 'State', name: 'Afar' },
      { '@type': 'State', name: 'Tigray' },
      { '@type': 'State', name: 'North Shewa' }
    ],
    priceRange: 'ETB 5000000 - ETB 500000000',
    knowsLanguage: ['am-ET', 'en', 'or'],
    foundingDate: '1995',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '150'
    },
    award: [
      {
        '@type': 'Award',
        name: 'Grade I General Contractor License',
        issuer: {
          '@type': 'Organization',
          name: 'Ethiopian Ministry of Works'
        }
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '25',
      bestRating: '5',
      worstRating: '1'
    }
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          strategy="beforeInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GDNSGVRRV7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GDNSGVRRV7');
          `}
        </Script>
      </head>
      <body className={`${syne.variable} ${dmSans.variable} ${notoSansEthiopic.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
