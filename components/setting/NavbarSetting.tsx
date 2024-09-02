import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

const NavbarSetting = () => {
  return (
    <>
      <Menubar className="flex justify-around ">
        <MenubarMenu>
          <MenubarTrigger>Edit profile</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>preference</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>security</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

export default NavbarSetting;
