"use client";

import {
  useContext,
  createContext,
  useState,
  useMemo,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { DataType } from "../types";
import { data } from "../utils/data";

type filterType = {
  type: "category" | "price" | "rating" | "name";
  value: string | Array<number> | Array<string>;
};

type productContext = {
  filterProduct: (product: filterType) => void;
  setProduct: Dispatch<SetStateAction<DataType[]>>;
  products: DataType[];
  type: string;
  setType: Dispatch<SetStateAction<string>>;
};

const ProductContext = createContext<productContext>({
  filterProduct: () => null,
  setProduct: () => null,
  products: [
    {
      id: 0,
      name: "",
      img: "",
      category: "",
      price: 0,
      ratings: 0,
      ratedBy: 0,
      description: "",
      discount: "",
    },
  ],
  type: "",
  setType: () => null,
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProduct] = useState<DataType[]>(data);
  const [type, setType] = useState<string>("All");
  const filterProduct = (payload: filterType) => {
    switch (payload.type) {
      case "category":
        const category = data.filter(
          (product) => product.category === payload.value
        );
        setProduct(category);
        setType(payload.value.toString());
        break;
      case "name":
        const name = data.filter((product) =>
          product.name
            .toLowerCase()
            .includes(payload.value.toString().toLowerCase())
        );
        setProduct(name);
        setType(payload.value.toString() || "All");
        break;

      case "price":
        const price = data.filter(
          (product) =>
            product.price >= Number(payload.value[0]) &&
            product.price <= Number(payload.value[1])
        );
        setProduct(price);
        setType(
          `Price between $${Number(payload.value[0])} and $${Number(
            payload.value[1]
          )}` || "All"
        );
        break;
      default:
        break;
    }
  };
  const value = useMemo(
    () => ({
      products,
      setProduct,
      filterProduct,
      setType,
      type,
    }),
    [products, setProduct, filterProduct, type, setType]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
