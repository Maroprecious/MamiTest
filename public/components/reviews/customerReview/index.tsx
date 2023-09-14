'use client'
import { useState } from "react"
import { AiTwotoneStar } from 'react-icons/ai'
import { Ratings } from "../../ratings"
import { CustomerRating } from "../../../utils/customerRating"

export const CustomerReview = () => {
   
    return (
        <div className="mb-[40px]">
            <h5 className="text-[#312E2E] text-[17px] font-medium leading-[28.8px]">Customers’ reviews and ratings</h5>
           <div className="flex items-center justify-start mt-[13px]">
           {
                [<AiTwotoneStar size={20} color="#FDE512" />, <AiTwotoneStar  size={20} color="#FDE512"  />, <AiTwotoneStar size={20} color="#FDE512" />, <AiTwotoneStar size={20} color="#FDE512" />, <AiTwotoneStar size={20} color="#D8D8D8" />].map((star) =>
                    <div>
                        {star}
                    </div>
                )
            }
            <p className="text-[#312E2E] text-[12px] font-normal leading-[22.4px] ml-[12px]">4.2 out of 5</p>
           </div>
           <p className="text-[#757575] text-[12px] font-light leading-[22.4px] pt-[6px]">Based on 133 reviews</p>
           <div className="w-full">
            {
                CustomerRating.map((elem) => <Ratings {...elem} key={elem.number}/>)
            }
           </div>
        </div>
    )
}