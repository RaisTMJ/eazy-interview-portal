import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from '../components/theme.provider';
import { Footer } from '../components/shared/footer';
import {Header} from '../components/shared/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eazy Interview Assessment",
  description: "Mohamad Rais Bin Abd Rasib",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> */}
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className=" flex-grow"> {children} </main>
          <Footer />
          </div>
        
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
