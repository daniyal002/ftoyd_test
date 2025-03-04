import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import QueryClientContextProvider from "@/components/QueryClientContextProvider";
import { StatusProvider } from "@/context/StatusContext";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Match Tracker",
  description: "ТУРНИРЫ! ТОКЕНЫ И РАНКЕД!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${interSans.className}  antialiased py-[53px] px-[16px] sm:px-[42px] container mx-auto `}
      >
        <QueryClientContextProvider>
        <StatusProvider>
          <Header />
          <main className="mx-auto">{children}</main>
          </StatusProvider>
        </QueryClientContextProvider>
      </body>
    </html>
  );
}
