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
  title: {
    default: "Daniel Kliewer - AI Developer & Technical Artist",
    template: "%s | Daniel Kliewer"
  },
  description: "Expert in Data Annotation, AI Development, LLM Orchestration, and building the Simulacra App. Connecting technical innovation with artistic sovereignty through local-first AI solutions.",
  keywords: [
    "Daniel Kliewer",
    "AI Developer",
    "Technical Artist",
    "LLM Orchestration",
    "Data Annotation",
    "Simulacra",
    "Local-First AI",
    "LangChain",
    "NetworkX",
    "Machine Learning",
    "Artificial Intelligence",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "AI Integration",
    "Local LLMs",
    "Ollama",
    "Agent Orchestration",
    "Persona Generation",
    "Technical Writing"
  ],
  authors: [{ name: "Daniel Kliewer", url: "https://danielkliewer.com" }],
  creator: "Daniel Kliewer",
  publisher: "Daniel Kliewer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://danielkliewer.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Daniel Kliewer - AI Developer & Technical Artist",
    description: "Expert in Data Annotation, AI Development, LLM Orchestration, and building the Simulacra App. Connecting technical innovation with artistic sovereignty through local-first AI solutions.",
    url: "https://danielkliewer.com",
    siteName: "Daniel Kliewer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile/8754022.jpeg",
        width: 1200,
        height: 630,
        alt: "Daniel Kliewer - AI Developer & Technical Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Kliewer - AI Developer & Technical Artist",
    description: "Expert in Data Annotation, AI Development, LLM Orchestration, and building the Simulacra App. Connecting technical innovation with artistic sovereignty through local-first AI solutions.",
    creator: "@danielkliewer",
    images: ["/profile/8754022.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code when available
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
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "f6e0fd58fbe048cc973bb159a62ef562"}'></script>

        <main className="flex-1 pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
