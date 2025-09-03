import "./globals.css";
import { Inter } from "next/font/google";

import CustomToastProvider from "./components/customToast";
import AppContextProvider from "./context/app";
import Header from "./components/header";

// Custom Font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* Toast Context */}
        <CustomToastProvider>
          {/* App Context */}
          <AppContextProvider>
            <Header /> {children}
          </AppContextProvider>
        </CustomToastProvider>
      </body>
    </html>
  );
}
