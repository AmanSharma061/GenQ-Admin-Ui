import NextAuthProvider from "@/components/Provider/NextAuthProvider";
import React, { ReactNode } from "react";
import '../globals.css'
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body className="w-full h-[100vh] overflow-hidden ">{children}</body>
    </html>
  );
};

export default layout;
