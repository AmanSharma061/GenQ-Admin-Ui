"use client";
import { sideBarData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="2xl:w-[13%] lg:w-[20vw]  h-full bg-[#FFFFFF] border-r border-r-[#E6EFF5] fixed">
      <div className="w-full h-24  items-center flex justify-center">
        <p className="text-2xl font-bold -mt-4 text-[#343C6A] 2xl:flex xl:hidden lg:hidden hidden">Gen Q Admin</p>
        <p className="text-2xl font-bold -mt-4 text-[#343C6A] 2xl:hidden ">GQ </p>
      </div>
      <div className="flex flex-col gap-y-1 items-center justify-center">
        {sideBarData?.map(
          (
            {
              name,
              path,
              icon: Icon,
              activeIcon: ActiveIcon
            }: { name: string; path: string; icon: any; activeIcon: any },
            index: number
          ) => {
            const isActive =
              pathname == "/qr/generated" && path == "/qr/generate"
                ? true
                : pathname == path;
            return (
              <Link
                href={path}
                key={index}
                className={` flex w-full   items-center `}
              >
                <div
                  className={`w-2  h-[4rem] ${
                    isActive && "bg-[#2D60FF] border-r rounded-r-xl "
                  }`}
                />

                <div className={` flex w-full px-6 items-center gap-x-6 `}>
                  <div>
                    {!isActive ? <Icon className="h-fit" /> : <ActiveIcon />}
                  </div>
                  <p
                    className={`${
                      isActive ? "!text-[#2D60FF]  " : "text-[#B1B1B1]"
                    } !font-poppins !font-medium mt-1 hidden lg:flex `}
                  >
                    {name}
                  </p>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

export default SideBar;
