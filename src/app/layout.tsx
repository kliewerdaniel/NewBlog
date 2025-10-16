import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Kliewer - AI Developer & Technical Artist",
  description: "Expert in Data Annotation, AI Development, LLM Orchestration, and building the Simulacra App. Connecting technical innovation with artistic sovereignty through local-first AI solutions.",
  keywords: ["Daniel Kliewer", "AI Developer", "Technical Artist", "LLM Orchestration", "Data Annotation", "Simulacra", "Local-First AI", "LangChain", "NetworkX"],
  authors: [{ name: "Daniel Kliewer" }],
  creator: "Daniel Kliewer",
  publisher: "Daniel Kliewer",
  openGraph: {
    title: "Daniel Kliewer - AI Developer & Technical Artist",
    description: "Expert in Data Annotation, AI Development, LLM Orchestration, and building the Simulacra App. Connecting technical innovation with artistic sovereignty through local-first AI solutions.",
    url: "https://danielkliewer.com",
    siteName: "Daniel Kliewer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Kliewer - AI Developer & Technical Artist",
    description: "Expert in Data Annotation, AI Development, LLM Orchestration, and building the Simulacra App. Connecting technical innovation with artistic sovereignty through local-first AI solutions.",
    creator: "@danielkliewer",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined') {
                  if (window.location.pathname === '/') {
                    document.body.classList.add('home-page');
                  }
                  console.log('Body className:', document.body.className);
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
