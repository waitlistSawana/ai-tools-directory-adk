import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AI Tools Directory | Discover 200+ AI Tools",
    template: "%s | AI Tools Directory",
  },
  description:
    "Explore a comprehensive directory of 200+ AI tools categorized by purpose. Find the perfect AI solution for your needs - from conversational AI to image generation, code assistants, and more.",
  keywords: [
    "AI tools",
    "artificial intelligence",
    "machine learning",
    "AI directory",
    "ChatGPT",
    "Midjourney",
    "AI assistants",
    "generative AI",
  ],
  authors: [{ name: "AI Tools Directory" }],
  creator: "AI Tools Directory",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-tools-directory.vercel.app",
    title: "AI Tools Directory | Discover 200+ AI Tools",
    description:
      "Explore a comprehensive directory of 200+ AI tools categorized by purpose.",
    siteName: "AI Tools Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Directory | Discover 200+ AI Tools",
    description:
      "Explore a comprehensive directory of 200+ AI tools categorized by purpose.",
    creator: "@aitoolsdir",
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
