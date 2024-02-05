import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GuidoF",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html className="snap-y snap-mandatory" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
