import NextAuthProvider from "@/components/Provider/NextAuthProvider";
import QueryProvider from "@/components/Provider/QueryProvider";
import { Toaster } from "@/components/ui/toaster";
import React from "react";
import "../globals.css";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextAuthProvider>
      <html>
        <QueryProvider>
          <body className="w-full h-[100vh] overflow-hidden relative">
            <Toaster  />
            {children}
          </body>
        </QueryProvider>
      </html>
    </NextAuthProvider>
  );
};

export default layout;
