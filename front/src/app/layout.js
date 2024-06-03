"use client";
import react,{ useEffect } from "react";
import "./globals.css";
import "./page.module.css";
import "./responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const metadata = {
  title: "Boom Fart Coin Site",
  description:
    "The newest and hottest meme coin in the world welcome to boom fart coin",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
