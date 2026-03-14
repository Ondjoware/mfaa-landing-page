import Footer from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Museu das Forças Armadas de Angola",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
