import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thief Detection AI Alarm",
  description: "Object detection using AI to detect thief and raise alarm. Created by Ansh Singh Sonkhia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>{children}</body>
    </html>
  );
}
