"use client";
import { Button } from "../../../public/components/custom";
import DesktopLayout from "../../../public/components/layout/desktop-layout";
import { images } from "../../../public/utils/images";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import { data } from "../../../public/utils/data";
import { DataType } from "../../../public/types";
import { init } from "next/dist/compiled/@vercel/og/satori";

const initial = {
    id: 0,
    name: "",
    img: "",
    category: "",
    price: 0,
    ratings: 0,
    ratedBy: 0,
    description: "",
    discount: "",
};

const ProductDetails = ({ id }: { id: number }) => {
    const [product, setProduct] = useState<DataType>(initial);
    const [number, setNumber] = useState<number>(0);

    useEffect(() => {
        if (id) {
            const product = data.find((product) => product.id === Number(id)) || initial;
            setProduct(product);
        }
    }, [id]);

    return (
            <div className="flex">
                <div className="h-[482px] w-[50%] flex">
                    <div className="flex flex-col justify-start items-center gap-[20px]">
                        {images.map((image) => (
                            <div key={image.id} className="w-[100px] h-[100px]">
                                <img
                                    src={image.img}
                                    className="w-full h-full rounded-[5px] bg-cover bg-center "
                                />
                            </div>
                        ))}
                    </div>
                    <div className=" mx-[25px] w-[437px] h-[460px]">
                        <img src={product.img} className="w-full h-full rounded-[10px]" />
                    </div>
                </div>
                <div className="w-[50%]">
                    {product.discount && (
                        <p
                            className={
                                "text-[10px] font-medium leading-[16px] py-[4px] px-[10px] w-[70px] bg-[#EC3237] mt-[10px] text-[#FFF] rounded-[16px] flex justify-center items-center"
                            }
                        >
                            {product.discount}% off
                        </p>
                    )}
                    <h3 className="text-[27px] text-[#312E2E] font-medium pt-[9px]">
                        {product.name}
                    </h3>
                    <div className="mt-[12px] flex items-center justify-start">
                        <div className="flex items-center justify-start">
                            <img src="/images/svg/bag.svg" className="w-[18px] h-[18px]" />
                            <p className="text-[12px] text-[#312E2E] font-light ml-[4px]">
                                79 units available
                                <span className="text-[#757575]"> (1 litre each)</span>
                            </p>
                        </div>
                        <div className="flex justify-between items-center ml-4">
                            <AiFillStar size={16} color="#FDE512" className="mr-[6px]" />
                            <h6 className="text-[12px] text-[#312E2E] font-medium">
                                {product.ratings}
                                <span className="font-normal text-[#757575]">
                                    ({product.ratedBy} reviews)
                                </span>
                            </h6>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[#00A85B] text-[25px] font-medium leading-[32px] mt-[13px]">
                            ${product.price}
                        </h4>
                        <h5 className="text-[16px] text-[#312E2E] font-medium leading-[28.8px] mt-[7px]">
                            Description
                        </h5>
                        <p className="text-[#8A8A8A] text-[11px] pt-[8px] font-light leading-[19.2px]">
                            Itambe Natural Milk is sourced from small, locally-owned farms
                            where cows are raised with care and attention. We believe in
                            treating animals with respect, and our farmers follow all
                            necessary guidelines to ensure the health and well-being of their
                            herds. Our milk is produced using sustainable, eco-friendly
                            practices, and we are committed to reducing our environmental
                            footprint. Overall, Itambe Natural Milk is a brand of milk that is
                            dedicated to producing high-quality, nutritious products while
                            also being mindful of the environment and the well-being of its
                            cows.
                        </p>
                        <div className="flex w-[121px] h-[48px] justify-between items-center rounded-[50px] bg-[#FFF] button_ px-[8px]">
                            <p
                                onClick={() => {
                                    if (number !== 1) {
                                        setNumber((prev) => prev - 1);
                                    }
                                }}
                                className="w-[27px] h-[27px] cursor-pointer bg-[#EDEDED;] text-[#9A9A9A] flex justify-center items-center rounded-[50%]"
                            >
                                -
                            </p>
                            <p className="text-[13px] text-[#312E2E] font-light">{number}</p>
                            <p
                                onClick={() => setNumber((prev) => prev + 1)}
                                className="bg-primary cursor-pointer text-[#FFF] w-[27px] h-[27px] flex justify-center items-center rounded-[50%] "
                            >
                                +
                            </p>
                        </div>
                        <Button className="text-[13px] leading-[19.2px] font-medium w-[50%] h-[48px] py-[10px] px-[16px] rounded-[5px] mt-[2px]">
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
    );
};
export default ProductDetails;