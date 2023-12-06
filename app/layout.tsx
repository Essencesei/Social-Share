import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "../providers/nextauth/SessionProvier";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Share",
  description:
    "Connect, share, and explore with Social Share - your go-to for seamless social networking. Share moments, connect with friends, and discover new experiences effortlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        ></NextSSRPlugin>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
