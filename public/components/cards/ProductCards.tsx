import { PopupModal } from "../custom";
import { data } from "../../utils/data";
import { ProductCard } from "./productCard";
import { BreadCrumbs } from "../breadCrumbs";
import { useProduct } from "../../context/product";

export const ProductCards = () => {
  const { products, type } = useProduct();
  return (
    <div className="pb-[100px]">
      <div className="mt-[47px]">
        <BreadCrumbs
          data={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "Top cities",
              href: "/",
            },
            {
              title: "Winnipeg",
              href: "/",
            },
            {
              title: "The Food Emporium",
              href: "/",
            },
          ]}
        />
      </div>
      <div className="flex justify-between items-center mt-[10px]">
        <p className="text-[#312E2E] text-[17px] font-light">
          {products.length} Results for{" "}
          <span className="font-semibold">{type}</span>
        </p>
        <PopupModal />
      </div>
      <div className="mt-[30px] gap-y-[25px] flex justify-between items-center flex-wrap w-full">
        {products.map((elem) => (
          <ProductCard {...elem} key={elem.id} />
        ))}
      </div>
    </div>
  );
};
