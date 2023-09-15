import { AiOutlineMenu } from "react-icons/ai";
import { SideDrawer } from "../drawer";
import { useState } from "react";
import Link from "next/link";

export const MobileHeader = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const handleOnClick = () => {
    const doc = document.querySelector("#nav-icon1");
    doc?.classList.toggle("open");

    setShowSideBar(!showSideBar);
  };
  
  return (
    <div>
      <div className="w-full bg-white h-[50px] z-50 fixed left-0 border-b px-4 flex justify-between items-center">
        <Link href='/'>
          <div className="bg-logo w-[100px] bg-no-repeat h-[32px] bg-contain" />
        </Link>
        <div className="mt-2" onClick={() => handleOnClick()}>
          <div id="nav-icon1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <SideDrawer visible={showSideBar} setVisible={setShowSideBar} />
    </div>
  );
};
