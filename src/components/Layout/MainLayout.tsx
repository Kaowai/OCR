"use client"
import React, { PropsWithChildren } from "react";
import Sidebar from "../Shared/Sidebar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="w-full overflow-y-auto">
        <div className="max-h-[100vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
