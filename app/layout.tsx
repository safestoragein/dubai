import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContactButtons from "@/components/floating-contact-buttons"
import PerformanceOptimizer from "@/components/performance-optimizer"
import Script from "next/script"
import { organizationSchema, localBusinessSchema, webSiteSchema } from "@/lib/structured-data"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://safestorage.ae'),
  title: {
    default: "SafeStorage Dubai - Premium Self Storage Solutions | Call +971505773388",
    template: "%s | SafeStorage Dubai"
  },
  description: "Dubai's most trusted self storage facility offering climate-controlled units, 24/7 security, and hassle-free pickup & delivery. Call +971505773388 for instant quote.",
  keywords: "self storage dubai, storage units dubai, climate controlled storage, secure storage dubai, business storage, personal storage, vehicle storage, document storage, storage facility dubai, dubai storage solutions, furniture storage dubai, moving storage dubai",
  authors: [{ name: "SafeStorage Dubai" }],
  creator: "SafeStorage Dubai",
  publisher: "SafeStorage Dubai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SafeStorage Dubai - Premium Self Storage Solutions | +971505773388",
    description: "Dubai's most trusted self storage facility with climate-controlled units, 24/7 security, and hassle-free pickup & delivery service. Call now!",
    url: "https://safestorage.ae",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SafeStorage Dubai - Premium Storage Facility"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeStorage Dubai - Premium Self Storage | +971505773388",
    description: "Dubai's most trusted self storage facility with climate-controlled units and hassle-free pickup & delivery.",
    images: ["/twitter-image.jpg"],
    creator: "@safestoragedubai"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://safestorage.ae",
    languages: {
      'en-AE': 'https://safestorage.ae',
      'ar-AE': 'https://safestorage.ae/ar'
    }
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A2463",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Structured Data / Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              localBusinessSchema,
              webSiteSchema
            ])
          }}
        />
        
        {/* Google Analytics (gtag.js) - G-EHB5H09SGY */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-EHB5H09SGY" strategy="afterInteractive" />
        <Script id="google-analytics-g-ehb5h09sgy" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EHB5H09SGY');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P8NDTTMX');
          `}
        </Script>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-952888343" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-952888343');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "sfah4ggsws");
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8NDTTMX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <PerformanceOptimizer />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContactButtons />
        </ThemeProvider>
      </body>
    </html>
  )
}
