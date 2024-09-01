import EditProfile from "@/components/setting/EditProfile";
import NavbarSetting from "@/components/setting/NavbarSetting";
import React from "react";
import { any } from "zod";

const page = () => {
  return (
    <div>
      <NavbarSetting />
      <EditProfile />
    </div>
  );
};

export default page;
