import ReactSlider from "react-slider";
import { useState } from "react";
import { useProduct } from "../../context/product";

export const PriceCard = () => {
  const [value, setValue] = useState([25, 50]);
  const { filterProduct } = useProduct();

  return (
    <div className="w-full h-[173px] bg-[#FFF] shadow-card rounded-[10px] py-[25px] px-[20px]">
      <div className="flex justify-between items-center">
        <h5 className="text-[17px] text-[#312E2E] font-semibold leading-[28.8px]">
          Price
        </h5>
        <p className="text-[#EC3237] text-[12px] font-medium leading-[19.2px]">
          Apply
        </p>
      </div>
      <div className="flex justify-between items-center mt-[20px]">
        <p className="text-[#312E2E] text-[13px] font-normal leading-[22.4px] w-[70px] h-[44px] rounded-[4px] border border-[#BDBDBD] border-solid flex justify-center items-center">
          ${value[0]}
        </p>
        <p className="text-[#312E2E] text-[13px] font-normal leading-[22.4px] w-[70px] h-[44px] rounded-[4px] border border-[#BDBDBD] border-solid flex justify-center items-center">
          ${value[1]}
        </p>
      </div>
      <div className="mt-6">
        <ReactSlider
          className="horizontal-slider bg-[red]"
          thumbClassName="example-thumb"
          trackClassName="track"
          withTracks={true}
          onAfterChange={(e) => {
            filterProduct({
              type: "price",
              value: e,
            });
          }}
          defaultValue={[0, 100]}
          onChange={(e) => setValue(e)}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{}</div>}
          pearling
          minDistance={10}
        />
      </div>
    </div>
  );
};
