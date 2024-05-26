import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export const metadata = {
  title: {
    default: "Next Blogs",
    template: "%s | Next Blogs",
  },
  description: "Next Blogs Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
