import { TopNav } from "./_components/topnav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Finance App",
  description: "A simple finance app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} `}>
        <div className="grid h-screen grid-rows-[auto,1fr]">
          <TopNav />
          <main className="overflow-y-scroll ">{children}</main>
        </div>
        {modal}
        <div id="modal-root" />
      </body>
    </html>
  );
}
