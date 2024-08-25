import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/components/Provider/NextAuthProvider";
import SideBar from "@/components/common/SideBar";
import NavHeader from "@/components/common/NavHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GenQ Admin ",
  description: ""
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={"w-full h-screen bg-[#f5f7fa]"}>
          <div className="w-full flex h-full">
            <SideBar />
            <div className=" w-full ">
              <NavHeader />

              {children}
            </div>
          </div>
        </body>
      </html>
    </NextAuthProvider>
  );
}
