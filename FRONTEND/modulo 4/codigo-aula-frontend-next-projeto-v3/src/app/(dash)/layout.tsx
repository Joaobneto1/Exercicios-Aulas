import { Header } from "@/components/dash/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css'
import Error from "./error";
import ErrorBoundary from "@/components/ErrorBoundary";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CubosFin",
  description: "CubosFin - Plataforma de Finanças",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>

        <div className="max-w-2xl mx-auto my-8">
          <ErrorBoundary>
            <Header />
            {children}
          </ErrorBoundary>
        </div>
      </body>
    </html>
  );
}
