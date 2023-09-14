import { AiOutlineSearch } from "react-icons/ai";
import { useProduct } from "../../../context/product";

export const SearchBox = () => {
  const { filterProduct } = useProduct();
  return (
    <div className="relative z-30 mt-[80px] lg:mt-0">
      <input
        className="w-full lg:w-[100%] h-[45px] lg:h-[52px] rounded-[50px] pl-[50px] border-0 outline-none placeholder_"
        placeholder="Search for product"
        onChange={(e) =>
          filterProduct({
            type: "name",
            value: e.target.value.toString() || "",
          })
        }
      />
      <AiOutlineSearch size={20} color="#B7B7B7" className="search_icon" />
    </div>
  );
};
