"use client";
import { categories } from "../../utils/categories";
import { useState } from "react";
import { useProduct } from "../../context/product";

export const CategoriesCard = () => {
  const [isActive, setIsActive] = useState(1);
  const { filterProduct } = useProduct();
  const handleOnClick = (id: number, category: string) => {
    setIsActive(id);
    filterProduct({
      type: "category",
      value: category,
    });
  };
  return (
    <div className=" w-full h-[280px] overflow-scroll bg-[#FFF] shadow-card py-[25px] px-[20px] rounded-[10px] scrollbar_ mt-[24px]">
      <h3 className="text-[#312E2E] text-[17px] font-semibold leading-[30.8px]">
        Categories
      </h3>
      <div>
        {categories.map((category) => {
          return (
            <div key={category.id} className={`mt-[5px] cursor-pointer`}>
              <p
                className={`text-[12px] font-light leading-[37.4px] pl-[10px] ${
                  category.id === isActive ? "active" : "inactive"
                }`}
                onClick={() => {
                  handleOnClick(category.id, category.name);
                }}
              >
                {category.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
