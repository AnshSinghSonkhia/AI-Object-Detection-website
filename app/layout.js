//import { Inter } from "next/font/google";

import { DM_Sans } from 'next/font/google';
import "./globals.css";


const dmSans = DM_Sans({
  subsets: ['latin'], // Specify desired character subsets
  weights: [100, 300, 400, 500, 700, 900], // Include the specific font weights you need
  display: 'swap', // Ensure smooth font loading with 'swap'
});

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Burglar Detector",
  description: "Object detection using AI to detect burglar & raise alarm. Developed by Ansh Singh Sonkhia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={dmSans.className}>{children}</body>
      {/* <body suppressHydrationWarning className={inter.className}>{children}</body> */}
    </html>
  );
}
