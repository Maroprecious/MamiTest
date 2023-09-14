"use client";

import DesktopLayout from "../../public/components/layout/desktop-layout";
import { SideBar } from "../../public/components/sidebar";
import { ProductCards } from "../../public/components/cards/ProductCards";
import { useMediaQuery } from "../../public/components/hooks/useMediaquery";
import { SearchBox } from "../../public/components/custom/inputs";
import { Preloader } from "../../public/components/preloader";
import { useEffect, useState } from "react";

export default function Home() {
  const matches = useMediaQuery("(max-width: 1024px)");
  const [preloader, setPreloader] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false)
    }, 3000);
  }, [])

  if (preloader) return <Preloader />

  return (
    <DesktopLayout showSearch={true}>
      <div className="flex justify-between items-start">
        <div className="w-[24%] hidden lg:inline pt-[50px] pb-[100px]">
          <SideBar />
        </div>
        <div className="w-full lg:w-[72%]">
          <div className="lg:hidden inline">
            <SearchBox />
          </div>
          <ProductCards />
        </div>
      </div>
    </DesktopLayout>
  );
}
