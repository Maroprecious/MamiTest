import { AiTwotoneStar } from "react-icons/ai"
import { Button } from "../../custom"

export const UserReview = () => {
    return (
        <div className="flex flex-col justify-between items-start w-full">
            <h5 className="text-[#312E2E] text-[17px] font-medium leading-[28.8px]">Your Rating</h5>
            <div className="flex items-center justify-start mt-[13px]">
                {
                    [<AiTwotoneStar size={20} color="#D8D8D8" />, <AiTwotoneStar size={20} color="#D8D8D8" />, <AiTwotoneStar size={20} color="#D8D8D8" />, <AiTwotoneStar size={20} color="#D8D8D8" />, <AiTwotoneStar size={20} color="#D8D8D8" />].map((star) =>
                        <div>
                            {star}
                        </div>
                    )
                }
            </div>
            <textarea placeholder="Enter your review here" className="pl-[10px] pt-[10px] w-full h-[215px] border-solid border border-[#BDBDBD] outline-none mt-[15px] rounded-[5px] text-[13px] text-[#ACABAB] font-light" />
            <Button className="text-[13px] leading-[19.2px] font-medium w-[40%] h-[48px] py-[10px] px-[16px] rounded-[5px] mt-[22px]">
                Submit review
            </Button>
        </div>
    )
}