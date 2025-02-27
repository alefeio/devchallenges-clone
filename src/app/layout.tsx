import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "devChallenges | Projetos da vida real para praticar suas habilidades e conseguir um emprego",
  description: "devChallenges é a melhor plataforma online para praticar codificação e conseguir um emprego rapidamente. Trabalhe em projetos da vida real, consiga um emprego como engenheiro front-end e construa seu portfólio!",
  icons: {
    icon: {
      url: "/favico.svg",
      type: "image/x-svg",
      sizes: "96x96"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
