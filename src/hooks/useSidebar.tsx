import Image from "next/image";
import React, { ReactNode } from "react";

export interface ISidebarItem {
  title: string;
  url: string;
  icon: ReactNode;
}
const useSidebar = () => {
  const sidebarItems: ISidebarItem[] = [
    {
      title: "Dashboard",
      url: "/project",
      icon: (
        <Image
          height={24}
          width={24}
          src={"/icons/dashboard.svg"}
          alt="dashboard-icon"
        />
      ),
    },
  ];
  return {
    sidebarItems,
  };
};

export default useSidebar;
