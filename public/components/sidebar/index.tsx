import { CategoriesCard, PriceCard, ProductRatingCard } from "../cards";

export const SideBar = () => {
  return (
    <div className="w-full">
      <div className="bg-contain bg-right h-[220px] w-full rounded-[10px] emporium inline-flex justify-start items-end pt-[174px] pr-[86px] pb-[24px] pl-[24px] ">
        <div className="flex-col justify-center items-center">
          <h5 className="text-[#F7F8FA] text-[14px] font-semibold leading-[25.6px]">
            The Food Emporium
          </h5>
          <p className="text-[#F7F8FA] text-[12px] font-normal leading-[19.2px]">
            Valour Road, Winnipeg
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full mt-[24px]">
        <p className="py-[2px] px-[10px] h-[32px] flex justify-center items-center text-[#FFF] text-[11px] font-medium leading-[19.2px] bg-primary rounded-[16px]">
          See deals of the day
        </p>
        <p className="text-[#EC3237] text-[11px] font-normal leading-[19.2px]">
          Up to 50% off
        </p>
      </div>
      <div className="flex-col flex gap-[32px]">
        <CategoriesCard />
        <PriceCard />
        <ProductRatingCard />
      </div>
    </div>
  );
};
