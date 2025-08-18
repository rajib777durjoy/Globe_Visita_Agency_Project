import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GlobVista Agency",
  description: "My project is a Travel Agency. Through this website, users can select any country they want and can also make bookings to travel there.",
  authors:{name:'Durjoy Chando' ,url:'https://portfolio-38edc.web.app'},
  keywords:['travel','Book flights & hotels','Family holiday tours','Bali tour deals','Dubai luxury holidays'],
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/travel_agency.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <main className="w-[100%] min-h-screen">
          {children}
        </main>

        <Footer></Footer>

      </body>

    </html>
  );
}
