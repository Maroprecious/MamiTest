import { AiTwotoneStar } from "react-icons/ai"
import { ReviewData } from "../../../utils/reviewData"
export const GeneralReviews = () => {
    return (
        <div className="pb-4">
            <div className="flex justify-between items-center mb-4">
                <h5 className="text-[#312E2E] text-[20px] font-medium leading-[38.4px]">Reviews</h5>
                <p className="text-[#00A85B] text-[13px] font-medium">See all comments</p>
            </div>
            <div className="flex justify-between  flex-wrap items-center ">
                {
                    ReviewData.map((review) => {
                        return (
                            <div className="mt-[8px] lg:mt-8 lg:w-[44%] w-full">
                                <div className="flex justify-between items-start">
                                    <div className="flex justify-start items-start">
                                        <img src={review.img} className="w-[50px] h-[50px]" />
                                        <div className="flex flex-col justify-start items-start ml-8">
                                            <p className="text-[#312E2E] text-[13px] font-normal">{review.name}</p>
                                            <div className="flex items-center justify-start mt-[10px]">
                                                {
                                                    [<AiTwotoneStar size={20} color="#FDE512" />, <AiTwotoneStar size={20} color="#FDE512" />, <AiTwotoneStar size={20} color="#FDE512" />, <AiTwotoneStar size={20} color="#FDE512" />, <AiTwotoneStar size={20} color="#FDE512" />].map((star) =>
                                                        <div>
                                                            {star}
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-[#757575] text-[13px] font-light"> {review.createdAt}</p>
                                </div>
                                <p className="ml-20 mt-4 text-[#757575] text-[14px] font-light leading-[25.6px]">{review.comment}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}