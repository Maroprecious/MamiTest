"use client";
import { ReactNode } from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { MobileHeader } from "../header/mobile-header";
import { useMediaQuery } from "../hooks/useMediaquery";

const DesktopLayout = ({
  children,
  showSearch,
}: {
  children: ReactNode;
  showSearch: boolean;
}) => {
  const matches = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="w-full h-full bg-secondary">
      {matches ? <MobileHeader /> : <Header showSearch={showSearch} />}
      <div className="bg-[#FCFCFC] px-4 lg:px-[80.25px]">{children}</div>
      <Footer />
    </div>
  );
};
export default DesktopLayout;
