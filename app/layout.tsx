import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import { Nav } from "@/components/client/Nav";
import { Providers } from "@/components/client/Providers";
import { Footer } from "@/components/Footer";
import { meta } from "@/config";
import "styles/globals.css";
import { cn } from "@/lib/utils";

export const metadata = {
//  metadataBase: new URL(meta.url),
 title: {
  default: meta.title,
  template: `%s | ${meta.title}`,
 },
 description: meta.shortDescription,
 openGraph: {
  title: meta.title,
  description: meta.shortDescription,
//   url: meta.url,
  siteName: meta.title,
  locale: "en_US",
  type: "website",
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
 twitter: {
  title: meta.title,
  description: meta.shortDescription,
  author: meta.accounts.twitter.username,
  card: "summary_large_image",
 },
 icons: {
  shortcut: "/favicon.ico",
 },
};

export const viewport = {
 themeColor: [
  { media: "(prefers-color-scheme: light)", color: "white" },
  { media: "(prefers-color-scheme: dark)", color: "black" },
 ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <ViewTransitions>
   <html lang="en" suppressHydrationWarning>
    <head>
     {process.env.HOTJAR_ID && (
      <Script strategy="afterInteractive" id="hotjar">
       {`
    (function(h,o,t,j,a,r){
     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
     h._hjSettings={hjid:${process.env.HOTJAR_ID},hjsv:6};
     a=o.getElementsByTagName('head')[0];
     r=o.createElement('script');r.async=1;
     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
     a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
   `}
      </Script>
     )}
    </head>
    <body className={cn("antialiase relative scroll-smooth px-6 font-mono", GeistMono.variable)}>
     <ThemeProvider attribute="class" disableTransitionOnChange>
      <Providers>
       <Nav />
       <main className="mx-auto min-h-screen w-full max-w-screen-md">{children}</main>
       <div className="noise pointer-events-none absolute inset-0" />
       <div className="color-rays" />
       <Footer />
       <Analytics />
      </Providers>
     </ThemeProvider>
    </body>
   </html>
  </ViewTransitions>
 );
}
