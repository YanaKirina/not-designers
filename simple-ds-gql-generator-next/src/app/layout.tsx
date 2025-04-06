import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ApolloProvider } from '@/components/ApolloProvider';
import {Header} from "@/components/Header"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Сбер Волонтёры",
  description: "Сбер Волонтёры — это платформа, где добрые дела становятся реальностью! Хотите помогать и менять мир к лучшему? Или ищете волонтёров для своего проекта? Здесь встречаются те, кто готов действовать, и те, кому нужна поддержка.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${montserrat.variable} font-sans antialiased h-full`}>
        <ApolloProvider>
          <Header></Header>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}