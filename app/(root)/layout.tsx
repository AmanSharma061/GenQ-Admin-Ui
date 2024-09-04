import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NextAuthProvider from "@/components/Provider/NextAuthProvider";
import SideBar from "@/components/common/SideBar";
import NavHeader from "@/components/common/NavHeader";
import { Toaster } from "@/components/ui/toaster";
import QueryProvider from "@/components/Provider/QueryProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GenQ Admin ",
  description: "",
};

export default function RootLayout({
  children
}:{
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <QueryProvider>
        <html lang="en">
          <body className={"w-full h-full bg-[#f5f7fa] relative"}>
           <SideBar/>
           <NavHeader/>
          <div className="2xl:ml-[13%]  lg:ml-[20vw] xl:ml-[20vw] md:ml-[12%] ml-[20%]">
          {children}
          </div>
          </body>
        </html>
      </QueryProvider>
    </NextAuthProvider>
  );
}
