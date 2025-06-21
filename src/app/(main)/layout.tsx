import MainLayout from "@/components/Layout/MainLayout";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
