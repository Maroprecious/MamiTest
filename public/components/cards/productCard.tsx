import { AiFillStar } from "react-icons/ai";
import { Button } from "../custom";
import { FC } from "react";
import { DataType } from "../../types";
import Link from "next/link";
import { AiFillHeart } from 'react-icons/ai'
import { useState } from "react";

export const ProductCard: FC<DataType> = ({
    description,
    price,
    img,
    ratings,
    ratedBy,
    category,
    discount,
    id,
    name,
    classname
    
}) => {
    const [liked, setLiked] = useState<boolean>(false)
    return (
        <div className={`w-full md:w-1/2 lg:w-[31.5%] h-[426px] bg-[#FFF] rounded-[10px] px-[15px] py-[15px] card_ ${classname}`}>
            <div style={{ backgroundImage: `url(${img})` }}
                className="w-[100%] h-[147px] relative rounded-[5px] bg-[#BDBDBD] bg-cover bg-center"
            >
                <div onClick={() => setLiked(!liked)} className="cursor-pointer absolute right-0 top-0 m-2">
                    <AiFillHeart size={20} fill={liked ? '#EC3237' : "#BDBDBD"} />
                </div>

            </div>
            <div className="flex justify-between items-center">
                <h5 className="text-[#00A85B] text-[12px] font-medium leading-[19.2px] pt-[10px]">
                    {category}
                </h5>
                <p
                    className={
                        discount === ""
                            ? ""
                            : "text-[10px] font-medium leading-[16px] py-[4px] px-[10px] bg-[#EC3237] mt-[10px] text-[#FFF] rounded-[16px]"
                    }
                >
                    {discount === "" ? "" : `${discount} off`}
                </p>
            </div>
            <h3 className="text-[#312E2E] text-[17px] font-medium leading-[19.2px] pt-[10px]">
                {name}
            </h3>
            <p className="text-[#8A8A8A] text-[11px] pt-[8px] font-light leading-[19.2px]">
                {description}
            </p>
            <div className="flex justify-between mt-[10px]">
                <h4 className="text-[#00A85B] text-[18px] font-semibold leading-[32px]">
                    ${price}
                </h4>
                <div className="flex justify-between items-center">
                    <AiFillStar size={16} color="#FDE512" className="mr-[6px]" />
                    <h6 className="text-[12px] text-[#312E2E] font-medium">
                        {ratings}{" "}
                        <span className="font-normal text-[#757575]">({ratedBy})</span>
                    </h6>
                </div>
            </div>
            <div className="flex justify-between items-center mt-[15px]">
                <Button className="text-[12px] leading-[19.2px] font-medium w-[117px] py-[10px] px-[16px] rounded-[5px]">
                    Add to cart
                </Button>
                <Link href={`/${id}`}>
                    <p className="text-[#00A85B] text-[12px] font-medium leading-[19.2px]">
                        More info
                    </p>
                </Link>
            </div>
        </div>
    );
};
