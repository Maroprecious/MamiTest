import { ProductRating } from "../../utils/productRating"

export const ProductRatingCard = () => {
    return (
        <div className="bg-[#FFF] shadow-card w-full h-[250px] py-[25px] px-[20px] rounded-[10px]">
            <h5 className="text-[#312E2E] text-[17px] font-semibold leading-[28.8px]">Product Rating</h5>
            <div className="flex flex-col gap-[16px] mt-[12px]">
                {
                    ProductRating.map((elem) => {
                        return (
                            <div key={elem.id} className="flex items-center justify-start">
                                <input type='checkbox' />
                                <p className="ml-[15px] text-[13px] font-light text-[#757575]">{elem.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}