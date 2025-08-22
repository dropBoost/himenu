import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "DROPBOOST- hi ) Menu",
  description: "powered by DROPBOOST.it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={`${nunito.variable} font-nunito h-screen`}>
        {children}
      </body>
    </html>
  );
}