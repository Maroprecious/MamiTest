import { SearchBox } from "../custom/inputs";
import { poppins } from "../../fonts";

export const Header = ({ showSearch }: { showSearch: boolean }) => {
  return (
    <div className="w-full bg-[#FFF] h-32 flex justify-between items-center px-[80.25px] py-[48px] px-[100px] py-[36px] shadow-custom">
      <div className="bg-logo w-[210.74px] h-[52px] bg-cover" />
      {showSearch && <SearchBox />}
      <div className="flex justify-between items-center gap-[40px]">
        <p className="text-[#312E2E] text-[14px] font-normal">FAQs</p>
        <p className="text-primary text-[14px] font-medium">Log in</p>
        <p className="text-secondary h-[48px] px-[20px] py-[10px] bg-primary rounded-[5px] text-[14px] flex justify-center items-center font-semibold">
          Sign up
        </p>
        <div className="bg-[#BDBDBD] border-l-[1px] h-[40px]" />
        <div className="bg-cart w-[28px] h-[28px] bg-contain" />
      </div>
    </div>
  );
};
