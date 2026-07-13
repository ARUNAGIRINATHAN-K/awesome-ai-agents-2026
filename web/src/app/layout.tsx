import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { KeyboardShortcutsProvider } from "@/components/keyboard-shortcuts-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://registry.ai"),
  title: {
    default: "Registry.ai | The AI Agent Registry",
    template: "%s | Registry.ai",
  },
  description: "Search, compare, and benchmark 450+ autonomous AI agent frameworks, execution environments, and utility stacks.",
  keywords: ["AI Agents", "Agentic Workflows", "Model Context Protocol", "MCP Server", "Autonomous Agents", "CrewAI", "LangGraph", "AutoGen"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://registry.ai",
    siteName: "Registry.ai",
    title: "Registry.ai | The AI Agent Registry",
    description: "Search, compare, and benchmark 450+ autonomous AI agent frameworks, execution environments, and utility stacks.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Registry.ai — The Open AI Agent Registry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Registry.ai | The AI Agent Registry",
    description: "Search, compare, and benchmark 450+ autonomous AI agent frameworks, execution environments, and utility stacks.",
    images: ["/assets/og-image.png"],
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <KeyboardShortcutsProvider>
            <div className="relative flex min-h-screen flex-col bg-background text-foreground">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </KeyboardShortcutsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
