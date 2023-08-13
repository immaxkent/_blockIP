import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlockIP",
  description: "ETH Global Superhack Hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-slate-900 text-white relative`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
